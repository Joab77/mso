const mongoose = require('mongoose')
const validator = require('validator')

const abonnerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        require: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },

})

module.exports = mongoose.model('Abonner', abonnerSchema)