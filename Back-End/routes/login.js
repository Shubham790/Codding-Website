const router=require('express').Router();
const User=require('../models/signup.model');
router.post('/',async (req,res)=>{
    
    let found = await User.findOne({email:req.body.email});
    
    res.set('Content-Type',"application/json");
    if(found)
    {
        let found1=await User.findOne({password:req.body.password});
        if(found1)
        {
           // console.log(found1._id);
            return res.send(found1);
        }
        else{
           return res.status(401).send("password doesnot match");//("password does not match");
        }
    }
    else{
        return res.status(401).send("email does not exist");
    }
});
router.post('/profile',async (req,res)=>{
    console.log(req.body.username);
    let found = await User.findOne({name:req.body.username});
    
    res.set('Content-Type',"application/json");
    if(found)
    {
            return res.send(found);
    }
    else{
        return res.status(401).send("username does not exist");
    }
});
router.put("/",async(req,res)=>{
    let found = await User.findOne({name:req.body.username});
    console.log(found);
    User.updateOne({"_id":found._id},{$set:req.body})
    .then(()=>res.send('upate'))
    .catch(()=>{ return res.status(400).send('data updated');})
});
module.exports=router;
