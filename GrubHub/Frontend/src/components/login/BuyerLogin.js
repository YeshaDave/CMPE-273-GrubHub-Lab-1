import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class BuyerLogin extends Component {

    

    render(){

        return(
            <div>
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            
                                <div className="col-md-4"></div>
                                <div className="col-md-4  outer-box">
                                <div className="col-md-12">   
                                <h3 class="font-bold">Sign in with your Grubhub account</h3>
                                </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Email<br/>
                                    <input type="email" class="form-control" name="email" required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password<br/>
                                    <input type="password" class="form-control" name="password" required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in           <span class="div-text2"><a>Reset Password</a></span></span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12 login-button"><img class="button-img" src="https://www.grubhub.com/img-hashed/grubhub_logo_img-f32224c65999bc87a7d65983e133e9fd.svg"></img>Sign In</button>
                                    <br/><br/><br></br>
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        or
                                    </div>
                                    <div class="div-text">
                                    <br/>
                                        <a>Create your account </a>
                                    </div>
                                </div>   
                                <div className="col-md-4"></div>  
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BuyerLogin;