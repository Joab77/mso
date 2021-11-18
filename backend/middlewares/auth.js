const jwt = require('jsonwebtoken');
const User = require('../models/user');

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");


// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {



    let token = ''

    // if(!token) {
    //     return next(new ErrorHandler('Login first to access this resource.', 401))
    // } else if(!req.headers['authorization']) {
    //     return next(createError.Unauthorized())
    // } else {

    // }

    if (req.headers['authorization']) {
        token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies) {
        token = req.cookies
    } else {
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }



    const decoded = jwt.verify(token, process.env.JWT_SECRET)


    req.user = await User.findById(decoded.id)


    next()

})

// Handler users roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403)
            )
        }
        next()
    }
}