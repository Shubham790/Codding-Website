const router=require('express').Router();
// const verifyToken=require("./verifytoken");
const User=require('../models/signup.model');
const jwt=require('jsonwebtoken');
function verifyToken(req, res, next) {
  const bearerHeader = req.body.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.body.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
router.post('/',async (req,res)=>{
    let found = await User.findOne({email:req.body.email});
    res.set('Content-Type',"application/json");
    if(found)
    {
        let found1=await User.findOne({password:req.body.password});
        if(found1)
        {
            console.log(found);
            jwt.sign({user:found},"s",(err,token)=>{
                console.log(token);
                res.send({
                   token: token,
                    found:found
                })
            });
        }
        else{
           return res.status(401).send("password doesnot match");
        }
    }
    else{
        return res.status(401).send("email does not exist");
    }
});
router.post('/profile',verifyToken,async (req,res)=>{
   // let found = await User.findOne({name:req.body.username});
   console.log(req.body.token);
       jwt.verify(req.body.token, "s", (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          res.json({
            authData
          });
        }
      });
});
router.put("/",async(req,res)=>{
  console.log(req.body);
    let found = await User.findOne({name:req.body.username});
    User.updateOne({"_id":found._id},{$set:req.body})
    .then(()=>res.send('upate'))
    .catch(()=>{ return res.status(400).send('data updated');})
});

module.exports=router;
