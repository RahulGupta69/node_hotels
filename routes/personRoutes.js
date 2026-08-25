
const express=require('express');
const router=express.Router();
const person=require('../models/person');
router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newPerson=new person(data);
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }

})
router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(error){
         console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;    
        if(workType=='chef' || workType=='waiter'||workType=='manager'){
          const response=await person.find({work:workType});
          console.log('data fetched');
          res.status(200).json(response);}
    }catch(error){
         console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.put('/:id',async(req,res)=>{ 
    try{
        const personId=req.params.id;
        const updatePersonData=req.body;
        const response=await person.findByIdAndUpdate(personId,updatePersonData,{new:true});
        if(!response){
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data deleted');
        res.status(200).json({ message: 'Person deleted successfully' });
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
// comment added for testing purpose
module.exports=router;