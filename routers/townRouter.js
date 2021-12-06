const express=require('express')

const router=express.Router()

const townController=require('../Controllers/townController')


router.route('/').get(townController.getTowns)
router.route('/').post(townController.createTown)

module.exports=router