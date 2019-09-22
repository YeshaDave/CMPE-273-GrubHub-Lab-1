import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class BuyerProfile extends Component {


    render() {

        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                <h5 class="font-bold" id="profilePicture" onChange = {this.pictureChangeHandler}><a>Profile Picture</a></h5><br/>
                <h5 class="font-bold" id="profile" onChange = {this.profileChangeHandler}><a>Profile</a></h5><br/>
                <h5 class="font-bold" id="phone" onChange = {this.phoneChangeHandler}><a>Phone</a></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                
                <div></div>

                <div class="col-md-8 profile-div">
                
                </div>
            </div>
        )
    }
}

export default BuyerProfile;