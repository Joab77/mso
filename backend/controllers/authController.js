const User = require('../models/user')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Errors = require('../middlewares/errors')

const Messages = require('../utils/messages')

const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')

const crypto = require('crypto')

// Register a user  => /register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

        const { name, email, password, number } = req.body
    
        let date = new Date(Date.now() + process.env.ABONNEMENT_TRY_TIME * 24 * 60 * 60 * 1000)

        const user = await User.create({
            name,
            email,
            password,
            number,
            subscription : {
                startDate: new Date(),
                endDate: date
            }
        })
        sendToken(user, 200, req, res, next)
})

// User login  => /login
exports.loginUser = async (req, res, next) => {

    try {
        const {email, password} = req.body

        // email and password not null
        if(!email || !password) {
            return Errors(new ErrorHandler(Messages.user.login.emptyEmailOrPass, 400), req, res, next)
        }

        const user = await User.findOne({ email }).select('+password')

        if(!user) {
            return Errors(new ErrorHandler(Messages.user.login.invalidEmailOrPass, 401), req, res, next)
        }

        const isMatch = await user.isValidPassword(password);

        if(!isMatch) {
            return Errors(new ErrorHandler(Messages.user.login.invalidEmailOrPass, 401), req, res, next)
        }
        console.log(user)
        sendToken(user, 200, req, res, next)
        
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Forgot Password  => /password/forgot
exports.forgotPassword = async (req, res, next) => {
    let user = new User

    try {
        user = await User.findOne({email: req.body.email})

        if(!user) {
            return next(new ErrorHandler(Messages.user.login.invalidEmailOrPass, 401))
        }

        // Get reset token
        const resetToken = user.getResetPasswordToken();

        await user.save({ validateBeforeSave: false })

        // Create reset password url
        const resetUrl = `${process.env.FRONTEND_BASE_URL}/password/reset/${resetToken}`;

        const message = `Your password rest token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`


        await sendEmail({
            email: user.email,
            subject: 'EasyRantel Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false });

        return  Errors(error, req, res, next)
    }

}

// Reset Password  => /password/reset:token
exports.resetPassword = async (req, res, next) => {

    try {
        const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })

        if(!user) {
            return next(new ErrorHandler('Password reset token is invalide or has been expired', 400))
        }

        if(req.body.password !== req.body.confirmPassword) {
            return next(new ErrorHandler('Password does not match', 400))
        }

        user.password = req.body.password

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        sendToken(user, 200, req, res, next)
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Get currently user details  ==> /me
exports.getUserProfile = async (req, res, next) => {

    try {
        const user = req.user

        res.status(200).json({
            success: true,
            user
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Update / Change password   ==> /password/update
exports.updatePassword = async (req, res, next) => {

    try {
        const user = await User.findById(req.user.id).select('+password');

        const isMatch = await user.isValidPassword(req.body.oldPassword)

        if(!isMatch) {
            return next(new ErrorHandler('Old password is incorrect', 400))
        }

        user.password = req.body.password;
        await user.save();

        sendToken(user, 200, req, res, next)
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Update user profile  ==> /me/update
exports.updateProfile = async (req, res, next) => {

    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
        }

        const user = await User.findByIdAndUpdate(req.user.id, newUser, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }

}

// Logout user  =>  /logout
exports.logout = async (req, res, next) => {

    try {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: 'Logged out'
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }
}


// Admin routes

// Get All users ==> /admin/users
exports.allUsers = async (req, res, next) => {

    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            users
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Get User details ==> admin/user/:id
exports.getUserDetails = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            return next(new ErrorHandler(Messages.user.notFound(req.params.id), 404))
        }

        res.status(200).json({
            success: true,
            user
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Get User details ==> user/:id/properties
exports.getUserProperties = async (req, res, next) => {

    try {
        const properties = await Property.find({'owner': req.params.id});

        if(!properties) {
            return next(new ErrorHandler(Messages.user.notFound(req.params.id), 404))
        }
    
        if(!properties.length) {
            return next(new ErrorHandler(Messages.user.noProperties(req.params.id), 404))
        }
        res.status(200).json({
            success: true,
            properties
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }
}

// Update user profile  ==> /admin/user/:id
exports.updateUser = async (req, res, next) => {

   try {
       const newUser = {
           name: req.body.name,
           email: req.body.email,
           number: req.body.number,
           role: req.body.role,
           abnt: req.body.abnt
       }

       const user = await User.findByIdAndUpdate(req.params.id, newUser, {
           new: true,
           runValidators: true,
           useFindAndModify: false
       })

       res.status(200).json({
           success: true,
           user
       })
   } catch (e) {
        return Errors(e, req, res, next)
   }
}

// Delete user ==> admin/user/:id
exports.deleteUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            return next(new ErrorHandler(Messages.user.notFound(req.params.id), 404))
        }

        await user.remove();

        res.status(200).json({
            success: true,
            message: 'User deleted'
        })
    } catch (e) {
        return Errors(e, req, res, next)
    }
}
