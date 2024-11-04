const express = require('express');
const router = express.Router();
const menuItem = require('../models/menu');

// router.get('/', Greet = (req,res) =>{
//     res.send('this is my menu...how can i help you')
// });

//posting data on mentItem schema : 
router.post('/',async (req,res) =>{
    try {
        const data = req.body;
    const newItem = new menuItem(data);
    const response = await newItem.save();
    console.log('item Saved Succesfully');
    res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
        
    }
});


//get method to get the data of menuItems : 
router.get('/', async (req,res) =>{
    try {
        const data = await menuItem.find();
        console.log('data recieved');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
});

router.get('/:tasteType', async (req,res) =>{
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'sour' || tasteType == 'spicy' || tasteType == 'sweet'){
            const respond = await menuItem.find({taste : tasteType});
            console.log('data fetched');
            res.status(200).json(respond);
        }else{
            res.status(404).json({error : 'invalid tasteType entered'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
});
module.exports = router;