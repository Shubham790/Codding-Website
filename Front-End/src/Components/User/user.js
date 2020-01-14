import React,{Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './user.css';
import Nav from "./navbar"
import Footer from "../nav/footer";
export default class User extends Component
{
    constructor(props)
    {
        super(props);
        const token=sessionStorage.getItem("token");
        let l=true
        if(token==null)
        {
            l=false
        }
        this.state={
            l
        }
    }
    render()
    {
        if(this.state.l === false)
        {
            return <Redirect to="/"></Redirect>
        }
        return <div >
        <Nav/>
        <div className="Dashboard1"><h2><b>Dashboard</b></h2></div>
         <div className="use1">
           <div class="card11" >
           <div class="card12"><p>&nbsp;&nbsp;Interview Preparation</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>Interview Preparation Kit</b></h4> 
              <Link to="/InterviewPre"><button class="button123 button3">Continue Practice</button></Link>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Problem Solving</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>Problem Solving</b></h4> 
              <Link to="/ProblemSol"><button class="button123 button3">Continue Practice</button></Link>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Language Profieciency</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>C</b></h4> 
              <Link to="/Languagepro"><button class="button123 button3">Continue Practice</button></Link>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Tutorial</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>30 Days Of Code</b></h4> 
              <Link to="/30DaysOFcode"><button class="button123 button3">Continue Practice</button></Link>
            </div>
          </div>
          </div>
          <div className="Dashboard1"><h2><b>Tutorial</b></h2></div>
         <div className="use1">
           <div class="card11" >
           <div class="card12"><p>&nbsp;&nbsp;Interview Preparation</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>Interview Preparation Kit</b></h4> 
             <Link to="/IntKit"><button class="button123 button3">View Tutorial</button></Link> 
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Tutorial</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>10 Days of Statistics</b></h4> 
             <Link to="/10days"> <button class="button123 button3">Start Tutorial</button></Link>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;30 Days of code</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>Learn to code in 30 days</b></h4> 
              <Link to="/learntocode"><button class="button123 button3">Start Tutorial</button></Link>
            </div>
          </div>
          </div> 
          <br></br><br></br>
          <Footer></Footer>
        </div>
       
    }
}