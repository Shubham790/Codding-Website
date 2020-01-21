const router=require('express').Router();
const showTest=require('../models/test.model');
router.post('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    showTest.find().then(exer=>res.json(exer))
    .catch(err=>res.status(400).json('Error: '+err));
});
module.exports=router;
