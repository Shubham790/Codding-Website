import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./navbar"
import Footer from "../nav/footer";
import "./Profile.css";
import Axios from 'axios';
import ima from "../User/img_avatar2.png"
export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            username: ''
        }
        this.submit1 = this.submit1.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            Axios.post('http://localhost:5000/login/profile', { username: sessionStorage.getItem("username") })
                .then((res) => {
                    console.log(res);
                    this.setState({ data: res.data })
                })
                .catch(res => {
                    //alert('error');
                })
        }, 100)
    }
    submit1(e) {
        e.preventDefault();
        var password = e.target.password.value;
        var mobile = e.target.mobile.value;
        var institute = e.target.institute.value;
        var cgpa = e.target.cgpa.value;
        var yearofcomplete = e.target.yearofcom.value;
        var degree = e.target.degree.value;
        var branch = e.target.branch.value;
        var address = e.target.address.value;

        Axios.put('http://localhost:5000/login', { username: sessionStorage.getItem("username"), password, mobile, institute, cgpa, yearofcomplete, degree, branch, address })
            .then((res) => {
                alert('Data Updated successfully');
                this.setState({});
            })
            .catch((error) => {
                alert('error');
            })
    }
    render() {
        //this.setState({username:this.props.match.params.user1}) ;
        return <>
            <Nav></Nav>
            <div class="wholeform">
                <div>
                    <h2><center>Profile</center></h2>
                    <form className="profileform" onSubmit={this.submit1}>
                        <div class="profileimgcontainer">
                            <img src={ima} alt="Avatar" class="profileavatar" />
                        </div>
                        <center><h1 className="profileform">Details.</h1></center>
                        <center><h3><b><u>{sessionStorage.getItem("username")}</u></b></h3></center>
                        <div class="profilecontainer">
                            <table className="table table-bordered">
                                <tr>
                                    <td><label className="profilestyle">Password</label><br></br><input type="password" name="password" value={this.state.data.password} ref={(input) => this.input = input}></input></td>
                                    <td><label className="profilestyle">Year of Completion</label><br></br><input name="yearofcom" type="text" value={this.state.data.yearofcomplete} ref={(input) => this.input = input} /><br /></td>
                                </tr>
                                <tr>
                                    <td><label className="profilestyle">Institute</label><br></br><input type="text" name="institute" value={this.state.data.institute} ref={(input) => this.input = input} /><br /></td>
                                    <td><label className="profilestyle">Cgpa</label><br></br><input type="text" name="cgpa" value={this.state.data.cgpa} ref={(input) => this.input = input} /><br /></td>
                                </tr>
                                <tr>
                                    <td><label className="profilestyle">Mobile No</label><br></br><input type="text" name="mobile" value={this.state.data.mobile} ref={(input) => this.input = input} /><br /></td>
                                    <td><label className="profilestyle">Degree</label><br></br><input type="text" name="degree" value={this.state.data.degree} ref={(input) => this.input = input} /><br /></td>
                                </tr>
                                <tr>
                                    <td><label className="profilestyle">Branch</label><br></br><input type="text" name="branch" value={this.state.data.branch} ref={(input) => this.input = input} /><br /></td>
                                    <td><label className="profilestyle">Address</label><br></br><input type="text" name="address" value={this.state.data.address} ref={(input) => this.input = input} /><br /></td>
                                </tr>
                            </table>
                        </div>
                        <div class="profilecontainer" style={{ backgroundColor: "#f1f1f1" }}>
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
