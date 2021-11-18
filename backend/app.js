const express = require('express')
const app = express();
const cors = require('cors')


const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const errorHandler = require('./middlewares/errors')
const catchAsyncErrors = require('./middlewares/catchAsyncErrors')

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


// cloudinary setting
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//Import all Route

const auth = require('./routes/auth')
const preach = require('./routes/preach')
const abonner = require('./routes/abonner')
const tabernacle = require('./routes/tabernacle')



app.use('/api/v1/', preach)
app.use('/api/v1/', auth)
app.use('/api/v1/', abonner)
app.use('/api/v1/', tabernacle)

// ErrorHandler to handler error
app.use(errorHandler)
app.use(catchAsyncErrors)

module.exports = app
