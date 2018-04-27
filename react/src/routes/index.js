import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../account/Login'
import NotFound from "../pages/NotFound";

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path={'/'}  exact component={Home}/>
                    <Route path="/login"  component={Login} />
                    <Route path='/404'component={NotFound} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        )
    }
}