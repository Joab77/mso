
const mongoose = require('mongoose')

const preachSchema = new mongoose.Schema({
    theme: {
        type: String,
        required: [true, 'Please enter preach theme']
    },
    subTheme: {
        type: String
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    content: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: [true, 'Please select this preach category'],
        enum: {
            values: [
                'Videos',
                'Audios',
                'PDF',
                'Others'
            ],
            message: 'Please select correct category for preach'
        }
    },
    author: {
        type: String,
        required: [true, 'Please select or enter this preach author']
    },
    // author: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: [true, 'Please select or enter this preach author']
    // },
    nbrOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
            },
            like: {
                type: Boolean,
                default: false
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    publishedAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
    },


})

module.exports = mongoose.model('Preach', preachSchema)
