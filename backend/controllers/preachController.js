
const Preach = require('../models/preach')


const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')


// Create new Preach => /admin/preach/new
exports.newPreach = catchAsyncErrors(async (req, res, next) => {

    const preach = await Preach.create(req.body)

    res.status(201).json({
        success: true,
        preach
    })

})

// Get all preachs   =>  /preachs
exports.getPreachs = catchAsyncErrors(async (req, res, next) => {

    // const resPerPage = 9;
    // const preachsCount = await Preach.countDocuments();

    // const apiFeatures = new APIFeatures(Preach.find(), req.query)
    //     .search()
    //     .filter()

    // let preachs = await apiFeatures.query;
    // let filterPreachsCount = preachs.length

    // apiFeatures.pagination(resPerPage)

    // preachs = await apiFeatures.query;

    // res.status(200).json({
    //     success: true,
    //     count: properties.length,
    //     preachsCount,
    //     filterPreachsCount,
    //     resPerPage,
    //     preachs
    // })
    const preachs = await Preach.find();

    res.status(200).json({
        success: true,
        count: preachs.length,
        preachs
    })
})



// Get single preach   => /preach/:id
exports.getSinglePreach = catchAsyncErrors(async (req, res, next) => {

    const preach = await Preach.findById(req.params.id)

    if (!preach) {
        return next(new ErrorHandler('Preach not found', 404))
    }

    preach.nbrOfViews++


    await preach.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        preach
    })

})

// Update preach  =>  /admin/preach/:id
exports.updatePreach = catchAsyncErrors(async (req, res, next) => {

    let preach = await Preach.findById(req.params.id)

    if (!preach) {
        return next(new ErrorHandler('Property not found', 404))
    }

    preach = await Preach.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        preach
    })

})

// Delete preach  =>  /admin/preach/:id
exports.deletePreach = catchAsyncErrors(async (req, res, next) => {


    const preach = await Preach.findById(req.params.id)

    if (!preach) {
        return next(new ErrorHandler('Preach not found', 404))
    }

    //Deleting images associated with the product
    // const resultatImage = await cloudinary.v2.uploader.destroy(preach.image.public_id)
    // const resultatContent = await cloudinary.v2.uploader.destroy(preach.content.public_id)

    await preach.remove();

    res.status(200).json({
        success: true,
        message: 'Preach is deleted'
    })

})


