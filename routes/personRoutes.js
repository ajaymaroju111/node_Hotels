const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/', async (req,res) =>{
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})



//get method to get the person data : 
router.get('/', async (req,res) =>{
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})

//parameterised URL : 
router.get('/:workType', async (req,res) =>{
    try {
        const workType = req.params.workType;
        if (workType =='chef' || workType =='manager' || workType =='waiter') {
            const response = await person.find({work : workType});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error : 'invalid work type'})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Internal server error'});
    }

});

//update operation using express : 
router.put('/:id', async(req,res)=>{
    try {
        const personId = req.params.id; //extract the data from URL parameter
        const updatedPersonData = req.body; //update data for the person
        const response = await person.findByIdAndUpdate(personId , updatedPersonData,{
            new : true, //return the updated version : 
            runValidators:true, //run the mongoose validation 

        })

        if(!response){
            return res.status(404).json({error : 'person does not found'});
        }

        console.log('data updated');
        res.status(200).json(response);

    } catch (error) {

        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
} );

//delete using express : 
router.delete('/:id', async (req,res) =>{
    try {
        const personId = req.params.id; //extract the persons ID from the url parameter
        //Assuming you having a person model
        const response = await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error : 'person does not found'});
        }
        console.log('Data deleted');
        res.status(200).json({message : 'data deleted Successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})
module.exports = router;