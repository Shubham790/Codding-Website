const router=require('express').Router();
const Mcq=require('../models/mcq.model');
router.get('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    Mcq.find().then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+err));
    }
    );
router.post('/',async (req,res)=>{
    const questionname=req.body.questionname;
    const image=req.body.image;
    const output=req.body.output;
    const newMcq=new Mcq({questionname,image,output});
    res.set('Content-Type',"application/json");
    newMcq.save().then(()=>res.json('Question Name added!'))
    .catch(err=>res.status(400).json('Error: '+ err)); 
});
module.exports=router;