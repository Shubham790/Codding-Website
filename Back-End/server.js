const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const app=express();
app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running on 5000`);
    });
app.use(cors());
app.use(express.json());
const url=process.env.ATLAS_URI;
mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
console.log('database successfully connected');
})
const signupRouter=require('./routes/signup');
const loginRouter=require('./routes/login');
const FeedbackRouter=require('./routes/Feedback');
const sampleRouter=require('./routes/sample');
const McqRouter=require('./routes/mcq');
const Compiler=require('./routes/sample1');
const forgot=require('./routes/forgot');
app.use('/',express.static('public/build'));
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/Feedback',FeedbackRouter);
app.use('/sample',sampleRouter);
app.use('/Compiler',Compiler);
app.use('/mcq',McqRouter);
app.use('/forgot',forgot);
