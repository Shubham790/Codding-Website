const router=require('express').Router();
const Sample=require('../models/sample.model');
router.get('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    Sample.find().then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+err));
    }
    );
router.post('/',async (req,res)=>{
    const questionname=req.body.questionname;
    const image=req.body.image;
    const type=req.body.type;
    const per=req.body.per;
    const newSample=new Sample({questionname,image,type,per});
    res.set('Content-Type',"application/json");
    newSample.save().then(()=>res.json('Question Name added!'))
    .catch(err=>res.status(400).json('Error: '+ err)); 
});
router.post('/search',async (req,res)=>{
    res.set('Content-Type',"application/json");
     var a=req.body.key;
    await Sample.findOne({questionname:a})
    .then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+ err)); 
});
module.exports=router;