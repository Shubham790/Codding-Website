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
            return res.send("login successfully");
        }
        else{
           return res.status(401).send("password doesnot match");//("password does not match");
        }
    }
    else{
        return res.status(401).send("email does not exist");
    }
});

module.exports=router;
