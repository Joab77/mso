const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        require: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },
    password: {
        type: String,
        require: [true, 'Please enter your password'],
        minLength: [6, 'Your password most be longer than 6 character'],
        select: false
    },
    number: {
        type: String,
        required: [true, 'Please enter your number']
    },
    role: {
        type: String,
        default: 'owner'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

// Encrypting password before saving user
userSchema.pre('save', async function (next) {

    if(!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)

})

// Compare User password
userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (err) {
        // throw err
    }
}

// Return JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
    
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken

}

const User = mongoose.model('User', userSchema)
module.exports = User


// module.exports = mongoose.model('User', userSchema)
