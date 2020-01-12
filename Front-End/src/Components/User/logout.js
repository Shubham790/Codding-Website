import React,{Component} from 'react';
import {Link, Redirect} from "react-router-dom"
export default class Logout extends Component{
    constructor(props)
    {
        super(props)
        localStorage.removeItem("token"); 
        alert("You have been logged out sucessfully");
    }

    render()
    {
        return <Redirect to="/"></Redirect>
    }
}