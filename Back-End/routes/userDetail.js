const router=require('express').Router();
const User=require('../models/signup.model');
router.post('/',async (req,res)=>{
    res.set('Content-Type',"application/json");
    User.find()
    .then(res1=>{
        return res.json(res1)
    })
    .catch(res1=>{
       return  res.status(401).send("Unauthorised")
    })
}
);
module.exports=router;
