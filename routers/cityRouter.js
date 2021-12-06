const express=require('express')

const router=express.Router()

const cityController=require('../Controllers/cityController')


router.route('/').get(cityController.getCities)
router.route('/').post(cityController.getTown)

module.exports=router