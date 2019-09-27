import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import BuyerSignup from './signup/BuyerSignup';
import BuyerLogin from './login/BuyerLogin';
import OwnerLogin from './login/OwnerLogin';
import OwnerProfile from './profile/OwnerProfile';
import OwnerSignin from './signup/OwnerSignin';
import BuyerProfile from './profile/BuyerProfile';
import Editname from './profile/Editname';
import EditPhone from './profile/EditPhone';

class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbar}/>
                <Route path="/bsignup" component={BuyerSignup}/>
                <Route path="/blogin" component={BuyerLogin}/>
                <Route path="/ologin" component={OwnerLogin}/>
                <Route path="/osignin" component={OwnerSignin}/>
                <Route path="/bprofile" component={BuyerProfile}/>
                <Route path="/oprofile" component={OwnerProfile}/>
                <Route path="/editName" component={Editname}/>
                <Route path="/EditPhone" component={EditPhone}/>
            </div>
        )
    }
}
//Export The Main Component
export default Main;