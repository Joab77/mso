const mongoose = require('mongoose')

const tabernacleSchema = new mongoose.Schema({

    nbrOfMember: {
        type: Number,
        default: 0
    },

    pastor:{
        name: {
            type: String,
            required: [true, 'Please enter this tabernacle pastor name']
        },
        number: {
            type: String,
            required: [true, 'Please enter this tabernacle pastor phone number' ]
        }
    },
    anciens:[
        {
            name: {
                type: String,
                required: [true, 'Please enter this tabernacle ancien name']
            },
            number: {
                type: String,
                required: [true, 'Please enter this tabernacle ancien phone number' ]
            }
        }
    ],
    region: {
        type: String,
        required: [true, 'Please enter this tabernacle region']
    },
    createdAt: {
        type: Date,
        required: [true, 'Please enter this tarbernacle born date']
    }

})

module.exports = mongoose.model('Tabernacle', tabernacleSchema)