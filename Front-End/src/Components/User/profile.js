import React,{Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Nav from "./navbar"
import Footer from "../nav/footer";
import "./Profile.css";
import Axios from 'axios';
import ima from "../User/img_avatar2.png"
export default class Profile extends Component
{
    constructor(){
        super();
        this.submit1=this.submit1.bind(this);

    }
    submit1(e){
    e.preventDefault();
    var password=e.target.password.value;
    var mobile=e.target.mobile.value;
    var institute=e.target.institute.value;
    var cgpa=e.target.cgpa.value;
    var yearofcomplete=e.target.yearofcom.value;
    var degree=e.target.degree.value;
    var branch=e.target.branch.value;
    var address=e.target.address.value;
    Axios.put('http://localhost:5000/login',{password,mobile,institute,cgpa,yearofcomplete,degree,branch,address})
    .then((res) => {
            alert('Data Updated successfully');
            // window.location="/login";
        })
    .catch((error) => {
        alert('error');
      })
    }
    render()
    {
        return<>
        <Nav></Nav>
        <div>
        {/* <form onSubmit={this.submit1}>
           Password <input type="text" name="password" ref={(input) => this.input = input}></input><br/>
           mobile<input type="text" name="mobile" ref={(input) => this.input = input}/><br/>
           institute<input type="text" name="institute" ref={(input) => this.input = input}/><br/>
           cgpa<input type="text" name="cgpa" ref={(input) => this.input = input}/><br/>
           Year of Completion<input name="yearofcom" type="text" ref={(input) => this.input = input}/><br/>
           degree<input type="text" name="degree" ref={(input) => this.input = input}/><br/>
           branch<input type="text" name="branch" ref={(input) => this.input = input}/><br/>
           address<input type="text" name="address" ref={(input) => this.input = input}/><br/>
           <input type="submit" value="save changes"></input>"
        </form> */}
        <div>
        <h2><center>Profile</center></h2>
        <form className="profileform" onSubmit={this.submit1}>
            <div class="profileimgcontainer">
                <img src={ima} alt="Avatar" class="profileavatar"/>
            </div>
           <center><h1 className="profileform">User Deatails.</h1></center>
            <center><h3><b><u>User name</u></b></h3></center>
            <div class="profilecontainer">
            <table className="table table-bordered">
            <tr>
            <td><label className="profilestyle">Password</label><br></br><input type="text" name="password" ref={(input) => this.input = input}></input></td>
            <td><label className="profilestyle">Year of Completion</label><br></br><input name="yearofcom" type="text" ref={(input) => this.input = input}/><br/></td>
            </tr>
            <tr>
            <td><label className="profilestyle">Institute</label><br></br><input type="text" name="institute" ref={(input) => this.input = input}/><br/></td>
            <td><label className="profilestyle">Cgpa</label><br></br><input type="text" name="cgpa" ref={(input) => this.input = input}/><br/></td>
            </tr>
            <tr>
            <td><label className="profilestyle">Mobile No</label><br></br><input type="text" name="mobile" ref={(input) => this.input = input}/><br/></td>
            <td><label className="profilestyle">Degree</label><br></br><input type="text" name="degree" ref={(input) => this.input = input}/><br/></td>
            </tr>
            <tr>
            <td><label className="profilestyle">Branch</label><br></br><input type="text" name="branch" ref={(input) => this.input = input}/><br/></td>
            <td><label className="profilestyle">Address</label><br></br><input type="text" name="address" ref={(input) => this.input = input}/><br/></td>
            </tr>
            </table>
            </div>
            <div class="profilecontainer" style={{backgroundColor:"#f1f1f1"}}>
            <center><input type="submit" value="Save Changes" className="cancelbtn"></input></center>
            </div>
        </form>
        </div>
        </div>
        <br></br>
        <Footer></Footer>
        </>
    }
} 