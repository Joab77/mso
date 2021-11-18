const express = require('express')
const router = express.Router();


const { 
    newAbonner, 
    getAbonners, 
    getSingleAbonner, 
    updateAbonner, 
    deleteAbonner  
    } = require('../controllers/abonnerController')


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')


router.route('/abonner/new').post(newAbonner)

router.route('/admin/abonners').get(getAbonners)

router.route('/admin/abonner/:id')
                    .get(getSingleAbonner)
                    .put(updateAbonner)
                    .delete(deleteAbonner)

module.exports = router