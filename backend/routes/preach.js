const express = require('express')
const router = express.Router();

const { 
    getPreachs, 
    newPreach, 
    getSinglePreach, 
    updatePreach, 
    deletePreach 

} = require('../controllers/preachController')


router.route('/preachs').get(getPreachs)

router.route('/preach/:id').get(getSinglePreach)

router.route('/admin/preach/new').post(newPreach)

router.route('/admin/preach/:id')
                .put(updatePreach)
                .delete(deletePreach)


module.exports = router