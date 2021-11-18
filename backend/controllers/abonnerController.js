const Abonner = require('../models/abonner')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')


// Create new Abonner => /abonner/new
exports.newAbonner = catchAsyncErrors(async (req, res, next) => {

    const abonner = await Abonner.create(req.body)

    res.status(201).json({
        success: true,
        abonner
    })

})


// Get all abonner   =>  /admin/abonners
exports.getAbonners = catchAsyncErrors(async (req, res, next) => {

    const abonners = await Abonner.find();

    res.status(200).json({
        success: true,
        count: abonners.length,
        abonners
    })
})

// Get single abonner   => /admin/abonner/:id
exports.getSingleAbonner = catchAsyncErrors(async (req, res, next) => {

    const abonner = await Abonner.findById(req.params.id)

    if (!abonner) {
        return next(new ErrorHandler('Abonner not found', 404))
    }


    await abonner.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        abonner
    })

})

// Update abonner  =>  /admin/abonner/:id
exports.updateAbonner = catchAsyncErrors(async (req, res, next) => {

    let abonner = await Abonner.findById(req.params.id)

    if (!abonner) {
        return next(new ErrorHandler('Abonner not found', 404))
    }

    abonner = await Abonner.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        abonner
    })

})

// Delete abonner  =>  /admin/abonner/:id
exports.deleteAbonner = catchAsyncErrors(async (req, res, next) => {

    const abonner = await Abonner.findById(req.params.id)

    if (!abonner) {
        return next(new ErrorHandler('Abonner not found', 404))
    }

    await abonner.remove();

    res.status(200).json({
        success: true,
        message: 'Abonner is deleted'
    })

})