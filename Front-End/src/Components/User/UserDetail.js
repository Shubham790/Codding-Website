import React,{Component} from "react";
import Axios from "axios";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../nav/footer";
import Nav from "../User/navbar";
import { Redirect } from "react-router-dom";
var b=0;
export default class StudentDetail extends Component
{
    constructor()
    {
        super();
        b=0;
        this.state={
            dat:[],
        }
        Axios.post("http://localhost:5000/userDetail","ss")
        .then((res)=>{
               this.setState({dat:res.data});
               console.log(this.state.dat);
        })
        .catch((res)=>{
                console.log('unauthorised');
        })
        this.change=this.change.bind(this);
        this.change1=this.change1.bind(this);
        this.change2=this.change2.bind(this);
    }
    change(a){
    Axios.delete('http://localhost:5000/userDetail/deleteuser',{data:{sss:a}})
    .then(res=>{
       alert('user deleted');
      window.location="/UserDetail"
    })
    .catch(res=>{
    console.log('user not deleted');
    })
    }
    change1(a){
        Axios.post('http://localhost:5000/userDetail/admin',{sss:a})
        .then(res=>{
           alert('admin added');
        })
        .catch(res=>{
        console.log('admin not added');
        })
        }
        change2(a){
            Axios.post('http://localhost:5000/userDetail/radmin',{sss:a})
            .then(res=>{
               alert('admin deleted');
            })
            .catch(res=>{
            console.log('admin not deleted');
            })
            }
    render()
    {
        return <>
        <Nav></Nav>
         <center><h1>User Details</h1></center>
            <table class="table">
            <thead class="table-dark">
                                <tr>
                                    <td scope="col"><b>Sr.No</b></td>
                                    <td scope="col"><b>UserName</b></td>
                                    <td scope="col"><b>Email</b></td>
                                    <td scope="col"><b>Delete User</b></td>
                                    <td scope="col"><b>Add Admin</b></td>
                                    <td scope="col"><b>Remove Admin</b></td>
                                </tr>
            </thead>
        {
         this.state.dat.map(a=>{
         return a.isUser||a.isAdmin?<tr><td>{b=b+1}</td><td>{a.name}</td><td>{a.email}</td>
        <td>
        <button onClick={()=>this.change(a._id)}>
         Delete
         </button>
        </td>
        <td>
         <button onClick={()=>this.change1(a._id)}>Add Admin</button>
        </td>
        <td>
        <button onClick={()=>this.change2(a._id)}>Remove Admin</button>
        </td></tr>:<span></span>})}
        </table>
        <Footer></Footer>
        </>
    }
}

