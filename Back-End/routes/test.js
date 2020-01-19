
var path = require('path');
var Router = require('express').Router();
var test = require('../models/test.model');
Router.post('/',async (req,res)=>{
    var i=0;
    console.log(req);
    const contestName=req.body.ContestName;
    const startday=req.body.StartDay;
    const endday=req.body.EndDay;
    const starttime=req.body.StartTime;
    const endtime=req.body.EndTime;
    const objective=req.body.Objective;
    const objectiveOption=req.body.Objinput;
    const objectiveAnswer=req.body.Objoutput;
    const code=req.body.Coding;
    const input=req.body.Codinput;
    const output=req.body.Codoutput;
    const newSample=new test({contestName,startday,endday,starttime,endtime,objective,objectiveOption,objectiveAnswer,code,input,output});
    res.set('Content-Type',"application/json");
    newSample.save().then(()=>res.json('Question Name added!'))
    .catch(err=>res.status(400).json('Error: '+ err)); 
});
module.exports = Router;
