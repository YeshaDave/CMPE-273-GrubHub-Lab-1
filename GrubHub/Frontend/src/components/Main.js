import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import BuyerSignup from './signup/BuyerSignup';
import BuyerLogin from './login/BuyerLogin';
import OwnerLogin from './login/OwnerLogin';
import OwnerSignup from './signup/OwnerSignup';
import BuyerProfile from './profile/BuyerProfile'

class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbar}/>
                <Route path="/bsignup" component={BuyerSignup}/>
                <Route path="/blogin" component={BuyerLogin}/>
                <Route path="/ologin" component={OwnerLogin}/>
                <Route path="/osignup" component={OwnerSignup}/>
                <Route path="/bprofile" component={BuyerProfile}/>
            </div>
        )
    }
}
//Export The Main Component
export default Main;