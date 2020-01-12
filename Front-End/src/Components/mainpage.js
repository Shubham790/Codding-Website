import React,{Component} from 'react';
import Signup from './loginsignup/signup';
import Login from './loginsignup/Login';
import {Route,Switch} from 'react-router-dom';
import Home from './nav/home';
import Feedback from './loginsignup/feedback';
import forgot from './loginsignup/forgot';
import Mabout from './nav/mainabout';
import Sample from './nav/sample';
import Sample1 from './nav/sample1';
import Mcq from './nav/mcq';
import User from "./User/user";
import Logout from './User/logout';
export default class MainPage extends Component
{
    render()
    {
        return  <div>
        <Switch>
        <Route exact path='/' component={Home}></Route> 
        <Route exact path="/Feedback" component={Feedback}></Route>
        <Route exact path="/about" component={Mabout}></Route>
        <Route exact path="/sample" component={Sample}></Route>
        <Route exact path="/mcq" component={Mcq}></Route>
        <Route exact path="/sample1/:varable1" component={Sample1}></Route>
        <Route exact path="/forgot" component={forgot}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/User" component={User}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        //sahil
        </Switch>
       </div>
    }
}
