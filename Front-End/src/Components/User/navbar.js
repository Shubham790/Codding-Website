import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ss1 from './nav.gif';
import {Link} from "react-router-dom"
import "./navbar.css"
export default class Navbar extends Component
{
  constructor()
  {
    super();
    this.state={
     a:localStorage.getItem("isUser"),
     b:localStorage.getItem("isAdmin"),
     c:localStorage.getItem("isSuperAdmin")
    }
  }
    render()
    {
        return <div><nav className="navbar navbar-expand-lg navbar-dark bg-custom-2">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <span className="navbar-brand"><img id="img" src={ss1} className='img-fluid gg'/><u>SackerRank</u></span>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
               <Link className="nav-link" to="/user">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/Tests">Tests</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/mcq">Change Password</Link>
            </li>
          </ul>
            <Link className="btn btn-outline-danger my-2 my-sm-2" to="/logout" >Logout</Link>
            &nbsp;&nbsp;&nbsp;
        </div>
      </nav>
      </div>
    }
}