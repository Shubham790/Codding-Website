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
    }
    change(a){
    a.preventDefault();
    console.log(a.target.del.value);
    Axios.delete('http://localhost:5000/userDetail/deleteuser',{data:{sss:a.target.del.value}})
    .then(res=>{
       alert('user deleted');
       window.location="/StudentDetail";
    })
    .catch(res=>{
    console.log('user not deleted');
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
                                      return a.isUser?<tr><td>{a.name}</td><td>{a.email}</td><td><form onSubmit={this.change}>
                                      <input type="submit" name="del" value={a._id}/>
                                      </form></td></tr>:<span/>
                                   })
                                }
                            </table>
                            <Footer></Footer>
        </>
    }
}
