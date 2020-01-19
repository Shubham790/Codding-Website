import React,{Component} from 'react';
import Axios from 'axios';
import Footer from "../nav/footer";
import Nav from "../User/navbar";
export default class Test extends Component{
    constructor(){
    super();
    this.state={
    ContestName:"",
    StartTime:"",
    StartDay:"",
    EndTime:"",
    EndDay:"",
    Objective:[],
    Objinput:[],
    Objoutput:[],
    Coding:[],
    Codinput:[],
    Codoutput:[]
    }
    this.add1=this.add1.bind(this);
    this.add2=this.add2.bind(this);
    this.name1=this.name1.bind(this);
    this.start1=this.start1.bind(this);
    this.end1=this.end1.bind(this);
    this.submit=this.submit.bind(this);
    this.ti=this.ti.bind(this);
    this.tj=this.tj.bind(this);
    }
    ti(e){
    this.setState({StartDay:e.target.value});
    }
    tj(e){
    this.setState({EndDay:e.target.value});
    }
    name1(e){
    this.setState({ContestName:e.target.value});
    }
    start1(e){
    this.setState({StartTime:e.target.value});
    }
    end1(e){
    this.setState({EndTime:e.target.value});
    }
    add1(e){
    e.preventDefault();
    let a=[];
    
     a.push(e.target.option1.value);
     a.push(e.target.option2.value);
     a.push(e.target.option3.value);
     a.push(e.target.option4.value);
     let c=[...this.state.Objinput];
     let b=e.target.answer.value;
     c.push(a);
     console.log(c);
     let g=this.state.Objoutput;
     g.push(b);
     this.setState({Objinput:c,Objoutput:g});
    }
    add2(e){
    e.preventDefault();
    let a=[];
    
     a.push(e.target.input1.value);
     a.push(e.target.input2.value);
     a.push(e.target.input3.value);
     a.push(e.target.input4.value);
     
      let b=[];
     b.push(e.target.output1.value);
     b.push(e.target.output2.value);
     b.push(e.target.output3.value);
     b.push(e.target.output4.value);
     let c=this.state.Coding;
     let d=this.state.Codinput;
     let f=this.state.Codoutput;
     let g=e.target.code.value;
     c.push(g);
     d.push(a);
     f.push(b);
    this.setState({Coding:c,Codinput:d,Codoutput:f});
    console.log('function2');
    }
    submit(e){
    e.preventDefault();
    let vb=this.state;
    console.log(this.state);
    Axios.post("http://localhost:5000/createTest",vb)
        .then(response=>{
                console.log("Data Added");
               
        })
        .catch(error=>{
        console.log('Error');
        })
    
    }
    render(){
        return <>
        <Nav></Nav>
         Contest Name:<input type="text" name="name1" value={this.state.ContestName} onChange={this.name1}/><br/>
         Start Time :<input type="text" name="start" value={this.state.StartTime} onChange={this.start1}/> <input type="text" value={this.state.StartDay} onChange={this.ti}/><br/>
         End Time :<input type="text" name="end" value={this.state.EndTime} onChange={this.end1}/> <input type="text" value={this.state.EndDay} onChange={this.tj}/><br/>
         
         <form onSubmit={this.add1}>
         Objective Questions<br/>
         Question Name<input type="text" name="objective" id="objective" ref={(input) => this.input = input}/><br/>
         
         Option1<input type="text" name="option1"  id="option1" ref={(input) => this.input = input}/>
         Option2<input type="text" name="option2"  id= "option2" ref={(input) => this.input = input}/><br/>
         Option3<input type="text" name="option3" id="option3" ref={(input) => this.input = input}/>
         Option4<input type="text" name="option4" id="option4" ref={(input) => this.input = input}/>
         enter only option here e.g. for option A write A
         Answer<input type="text" name="answer" id="answer" ref={(input) => this.input = input}/>
         <button type="submit" value="submit"/>
         <br/>
         </form>
        <form onSubmit={this.add2}>
         Coding Questions<br/>
         Question Name<input type="text" name="code" ref={(input) => this.input = input}/><br/>
         TestCases 1<br/>
         input<input type="text" name="input1" ref={(input) => this.input = input}/>
         output<input type="text" name= "output1" ref={(input) => this.input = input}/><br/>
           TestCases 2<br/>
          input<input type="text" name="input2" ref={(input) => this.input = input}/>
         output<input type="text" name="output2"  ref={(input) => this.input = input}/><br/>
          TestCases 3<br/>
          input<input type="text" name="input3" ref={(input) => this.input = input}/>
         output<input type="text" name="output3" ref={(input) => this.input = input}/><br/>
          TestCases 4<br/>
          input<input type="text" name="input4" ref={(input) => this.input = input}/>
         output<input type="text" name="output4" ref={(input) => this.input = input}/><br/>
        <button type="submit" value="submit"/>
        </form>
        <input type="submit" value="Create Test " onClick={this.submit}/>
        <Footer></Footer>
        </>
    
    }

}
