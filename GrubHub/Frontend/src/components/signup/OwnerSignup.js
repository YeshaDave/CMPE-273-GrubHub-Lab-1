import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class OwnerSignup extends Component {


    render(){

        return(
            <div>
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            
                                <div className="col-md-2"></div>
                                <div className="col-md-8  outer-box">
                                    <div className="col-md-12">
                                    <h4>How many locations are you signing up?</h4>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="col-md-6">
                                        <select name="location_nos">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/><h4>Restaurant Information</h4>
                                    <br/>
                                    <h5>Restaurant Name</h5><br/>
                                    <input type="email" class="form-control" name="email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <br/><br/>
                                    <span className="col-md-8">Restaurant Address</span>
                                    
                                    <span className="col-md-4">Suite optional</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="col-md-8"><input type="text" class="form-control" name="address" required/></div>
                                   
                                    <div className="col-md-4"><input type="text" class="form-control" name="suite" required/></div>
                                    <br/></div>
                                    <div class="form-group" className="col-md-6">
                                    <span>
                                    <br/>
                                    <a>Manually enter address</a></span><br/>
                                    <br/>
                                    <h4>Restaurant phone number</h4>
                                    <br/>
                                    
                                    <input type="text" class="form-control" name="phone" required />
                                   
                                    </div>
                                </div>   
                                <div className="col-md-2"></div>  
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default OwnerSignup;