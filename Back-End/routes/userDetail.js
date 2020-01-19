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
router.delete('/deleteuser',async (req,res)=>{
 res.set('Content-Type',"application/json");
console.log(req.body.sss);
    User.deleteOne({_id:req.body.sss})
    .then(res1=>res.send(res1))
    .catch(res1=>res.status(401).send("unauthored"));

})
module.exports=router;
