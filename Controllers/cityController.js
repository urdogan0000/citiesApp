const City=require('../Models/City')
const Town=require('../Models/Town')

exports.getCities=async (req,res)=>{
    try {
        const cities=await City.find()

        console.log(cities)

        res.status(200).json(cities)
        
    } catch (error) {
        res.status(400).json({status:failed})
    }
    
}

exports.createCity=async (req,res)=>{
    try {
       console.log(req.body)
        const city=await City.create(req.body)
        res.status(201).json(city)
    } catch (error) {
        
    }
}

exports.getTown=async (req,res)=>{
    try {
        const {city_id}=req.body
        const towns=await Town.find({city_id})

        res.status(200).json(towns)
        
    } catch (error) {
        res.status(400).json({status:"failed"})
    }
    
}