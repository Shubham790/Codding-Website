const router=require('express').Router();
const nodemailer = require('nodemailer');
const EmailExists = require('email-verifier');
let emailExists=new EmailExists("https://emailverification.whoisxmlapi.com/api/v1?apiKey=at_OAtHiLZHOyiEhSwx9BfLC9kIbKr6i&emailAddress=support@whoisxmlapi.com",{
    checkCatchAll: false,
    checkDisposable: false,
    checkFree: false,
    validateDNS: false,
    validateSMTP: false
  })
let user=require('../models/signup.model');
require('dotenv').config();
router.post('/',async (req,res)=>{
    let found = await user.findOne({email:req.body.email});
    let found1 = await user.findOne({name:req.body.name});
    if(found1)
    {
        res.set('Content-Type',"application/json");
        return res.status(401).send("Username already exist");
    }
    else if(found)
    {
        res.set('Content-Type',"application/json");
        return res.status(401).send("email already exist");
    }
    else{
    emailExists.verify(req.body.email,function(err,response){
        if(response)
        {
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;
        const newUser=new user({name,email,password});
        newUser.save().then(()=>res.json('user added!'))
        .catch(err=>res.status(400).json('Error: '+ err));
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.user,
                pass: process.env.password
            }
        });
        let mailOptions = {
            from: 'Sackerrank Team',
            to: email,
            subject: 'Signup Successful on Sackerrank',
            html: '<p><center><h2>Sackerrank\n</h2></center><br></br><h3>Hello '+ name+'!</h3>Your Signup was Successful on Sackerrank<br></br><h3>Your password is '+password+'</h3></p>'
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return res.status(401).send("error");
            }
            return res.send("Signup Succesfully");
        });
       }
        else
        {
            return res.status(401).send("email address is not valid");
        }
        });
    }
});
module.exports=router;
