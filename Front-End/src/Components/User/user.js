import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './user.css';
import Nav from "./navbar"
export default class User extends Component
{
    constructor(props)
    {
        super(props);
        const token=localStorage.getItem("token");
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
        return <>
        <Nav/>
         <div>
           <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Interview Preparation</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>Interview Preparation Kit</b></h4> 
              <button class="button123 button3">Continue Practice</button>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Problem Solving</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>Problem Solving</b></h4> 
              <button class="button123 button3">Continue Practice</button>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Language Profieciency</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>C</b></h4> 
              <button class="button123 button3">Continue Practice</button>
            </div>
          </div>
          <div class="card11">
           <div class="card12"><p>&nbsp;&nbsp;Tutorial</p><img class="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg"/></div>
           <div class="container123">
              <h4><b>30 Days Of Code</b></h4> 
              <button class="button123 button3">Continue Practice</button>
            </div>
          </div>
          </div>
          
        </>
    }
}