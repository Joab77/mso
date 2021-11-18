const Tabernacle = require('../models/tabernacle')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')


// Create new tabernacle => /admin/tabernacle/new
exports.newTabernacle = catchAsyncErrors(async (req, res, next) => {

    const tabernacle = await Tabernacle.create(req.body)

    res.status(201).json({
        success: true,
        tabernacle
    })

})

// Get all tabernacles   =>  /tabernacles
exports.getTabernacles = catchAsyncErrors(async (req, res, next) => {

    const tabernacles = await Tabernacle.find();

    res.status(200).json({
        success: true,
        count: tabernacles.length,
        tabernacles
    })
})

// Get single tabernacle   => /tabernacle/:id
exports.getSingleTabernacle = catchAsyncErrors(async (req, res, next) => {

    const tabernacle = await Tabernacle.findById(req.params.id)

    if (!tabernacle) {
        return next(new ErrorHandler('Tabernacle not found', 404))
    }


    await tabernacle.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        tabernacle
    })

})

// Update tabernacle  =>  /admin/tabernacle/:id
exports.updateTabernacle = catchAsyncErrors(async (req, res, next) => {

    let tabernacle = await Tabernacle.findById(req.params.id)

    if (!tabernacle) {
        return next(new ErrorHandler('Tabernacle not found', 404))
    }

    tabernacle = await Tabernacle.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        tabernacle
    })

})

// Delete tabernacle  =>  /admin/tabernacle/:id
exports.deleteTabernacle = catchAsyncErrors(async (req, res, next) => {

    const tabernacle = await Tabernacle.findById(req.params.id)

    if (!tabernacle) {
        return next(new ErrorHandler('Tabernacle not found', 404))
    }

    await tabernacle.remove();

    res.status(200).json({
        success: true,
        message: 'Tabernacle is deleted'
    })

})