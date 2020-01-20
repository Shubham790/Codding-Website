import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import a from '../nav/a.jpg'
import b from "../nav/b.jpg";
import Axios from "axios";
import "./compiler.css";
var key=true;
var arr=[];
function change()
{
    key=false;
}
function change1()
{
    key=true;
}
export default class Compiler extends Component
{
  constructor()
  {
    super();
    /*document.getElementById('code1776').innerHTML="#include<stdio.h>\nint main(){\nprintf(\"hello world\");\nreturn 0;\n}";*/
    this.handleSubmit=this.handleSubmit.bind(this);
    this.color=this.color.bind(this);
    this.sample=this.sample.bind(this);
  }
  sample(){
    document.getElementById('code1776').innerHTML=document.getElementById('sampleee').value=='C'?"#include<stdio.h>\nint main(){\nprintf(\"hello world\");\nreturn 0;\n}":document.getElementById('sampleee').value=='C++'?"#include<iostream>\nusing namespace std;\nint main(){\ncout<<\"hello world\";\nreturn 0;\n}":document.getElementById('sampleee').value=='Java'?"import java.util.*;\nclass Main{\npublic static void main(System.in){\nSystem.out.println('hello world');\n}":"print('hello')";
  }
  color(){
     document.getElementById('code1776').style.backgroundColor=document.getElementById('color').value;
    document.getElementById('code1776').style.color=document.getElementById('color').value=="black"?"white" :"black";
  }
  handleSubmit(e){
    e.preventDefault();
    Axios.post('http://localhost:5000/Compiler',{type:key,questionname:this.props.questionname,code:e.target.code.value,input:e.target.input.value,lang:e.target.lang.value,inputRadio:e.target.inputRadio.value})
    .then((res) => {
    if(key){
        document.getElementById('output').innerHTML=res.data;
    }
    else{
      var fals=0;
      arr=[...res.data];
      if(arr[0])
      {
         fals++;
      document.getElementById('output1').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output1').setAttribute("src",b);
      }
      if(arr[1])
      {
        fals++;
      document.getElementById('output2').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output2').setAttribute("src",b);
      }
      if(arr[2])
      {
        fals++;
      document.getElementById('output3').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output3').setAttribute("src",b);
      }
      if(arr[3])
      {
        fals++;
      document.getElementById('output4').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output4').setAttribute("src",b);
      }
      document.getElementById("out").innerHTML="TestCase Pass- "+fals+"/4 ";
    }

  })
  .catch(error=>{
    document.getElementById('output').innerHTML=error.data;
  })
  }
    render()
    {
        return <div className="container-fluid">
        <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <form id="myform" name="myform" onSubmit={this.handleSubmit}>
      <center><u><h3 style={{color:"blue"}}>Type Your Code Here</h3></u><br></br>
        <h5 style={{color:"blue"}}>Language : <select name="lang" id="sampleee"onClick={this.sample}>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>  
          <option value="Python">Python</option>
        </select>
        <select id="color" onClick={this.color}>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="cadetblue">Cadet Blue</option>  
          <option value="darkgrey">Dark Grey</option>
        </select></h5></center>
        <textarea rows="13" cols="100" id="code1776" name="code" ></textarea> 
        <br/>
       <u><h3 style={{color:"blue"}}>Input</h3></u>
        <textarea cols="20" rows="7" id="input1776" name="input"></textarea>&nbsp;&nbsp;&nbsp;&nbsp;
         <br/>
         <br></br>
        <h5 style={{color:"blue"}}>Compile With Input:&nbsp;&nbsp;
        <input type="radio" name="inputRadio" id="inputRadio" value="true"/>Yes&nbsp;&nbsp;
        <input type="radio" name="inputRadio" id="inputRadio" value="false"/>No
        <br /><br></br></h5>
       <center> <input type="submit" value="Run" id="submit" onClick={change1}/>&nbsp;&nbsp;
        <input type="submit" value="Submit" id="submit" onClick={change}/></center>
        <br/>
        <span id="out"></span><br></br>
        <img id="output1"style={{width:'10%',height:'10%'}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="output2"style={{width:'10%',height:'10%'}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="output3"style={{width:'10%',height:'10%'}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="output4" style={{width:'10%',height:'10%'}}></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <br></br>
         <u><h3 style={{color:"blue"}}>Output</h3></u>
        <textarea cols="50" rows="7" id="output" name="output"></textarea>
        </form>
        </div>
        </div>
        </div> 
    }
}