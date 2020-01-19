import React,{Component} from "react";
import Axios from "axios";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../nav/footer";
import Nav from "../User/navbar";
export default class StudentDetail extends Component
{
    constructor()
    {
        super();
        this.state={
            dat:[]
        }
        Axios.post("http://localhost:5000/userDetail","ss")
        .then((res)=>{
               this.setState({dat:res.data});
               console.log(this.state.dat);
        })
        .catch((res)=>{
                console.log('unauthorised');
        })
    }
    render()
    {
        return <>
        <Nav></Nav>
         <center><h1>User Details</h1></center>
            <table className="table table-bordered">
                                <tr>
                                    <td><b>UserName</b></td>
                                    <td><b>Email</b></td>
                                    <td><b>Delete User</b></td>
                                </tr>
                                {
                                   this.state.dat.map(a=>{
                                      return <tr><td>{a.name}</td><td>{a.email}</td><td><button>Delete</button></td></tr>
                                   })
                                }
                            </table>
                            <Footer></Footer>
        </>
    }
}
