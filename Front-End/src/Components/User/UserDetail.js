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
        this.change=this.change.bind(this);
        this.change1=this.change1.bind(this);
        this.change2=this.change2.bind(this);
    }
    change(a){
    Axios.delete('http://localhost:5000/userDetail/deleteuser',{data:{sss:a}})
    .then(res=>{
       alert('user deleted');
       window.location="/StudentDetail";
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
            <table className="table table-bordered">
                                <tr>
                                    <td><b>UserName</b></td>
                                    <td><b>Email</b></td>
                                    <td><b>Delete User</b></td>
                                    <td><b>Add Admin</b></td>
                                    <td><b>Remove Admin</b></td>
                                </tr>
                                {
                                   this.state.dat.map(a=>{
                                      return a.isUser||a.isAdmin?<tr><td>{a.name}</td><td>{a.email}</td><td>
                                      <button onClick={()=>this.change(a._id)}>
                                          Delete
                                      </button>
                                      </td><td>
                                      <button onClick={()=>this.change1(a._id)}>
                                         Add Admin
                                      </button>
                                      </td><td>
                                      <button onClick={()=>this.change2(a._id)}>
                                         Remove Admin
                                      </button>
                                      </td></tr>:<span></span>
                                   })
                                }
                            </table>
                            <Footer></Footer>
        </>
    }
}

