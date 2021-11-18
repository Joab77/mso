const express = require('express')
const router = express.Router();


const {
    newTabernacle,
    getTabernacles,
    getSingleTabernacle,
    updateTabernacle,
    deleteTabernacle
} = require('../controllers/tabernacleController')

router.route('/tabernacles').get(getTabernacles)

router.route('/tabernacle/:id').get(getSingleTabernacle)

router.route('/admin/taberncale/new').post(newTabernacle)

router.route('/admin/tabernacle/:id')
                        .put(updateTabernacle)
                        .delete(deleteTabernacle)

module.exports = router