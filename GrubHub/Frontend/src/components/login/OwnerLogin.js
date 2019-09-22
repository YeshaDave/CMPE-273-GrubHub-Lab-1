import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class OwnerLogin extends Component {

    

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
                                <div className="col-md-5">
                                <div className="col-md-12">   
                                </div>
                                <div class="form-group" className="col-md-12">
                                <img class="img-size" src="https://restaurant.grubhub.com/img/gfr-horizontal-black_exoFEG-d4f8c467.svg"></img>
                                </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/><br/>
                                    Username or Email Address<br/>
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
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Remember me</span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12">Sign In</button>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <br/>
                                    <a>Forgot Username</a>
                                    <br/>
                                    <br/>
                                    <a>Forgot Password</a>
                                    </div>
                                </div>   
                                <div className="col-md-3"></div>  
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default OwnerLogin;