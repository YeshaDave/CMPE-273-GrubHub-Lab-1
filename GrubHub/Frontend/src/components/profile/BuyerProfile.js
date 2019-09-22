import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class BuyerProfile extends Component {


    pictureChangeHandler = (e) => {
        this.setState({
            profilePicture : e.currentTarget.id
        })
    }

    profileChangeHandler = (e) => {
        this.setState({
            profile : e.currentTarget.id
        })
    }

    phoneChangeHandler = (e) => {
        this.setState({
            phone : e.currentTarget.id
        })
    }

    render() {

        let profilePicture = () => {
            console.log("inside profile picture")
            return(
                <div>
                    <h4 class="font-bold">Profile Picture</h4>
                    <img></img> 
                </div>
            )
        } 

        let buyerProfile = () => {
            return(
                <div>
                <div><h4 class="font-bold">Your Account</h4><br/>
                <h5 class="font-bold">Name</h5>
                </div>

                <div>
                <h5 class="font-bold">Email</h5>
                </div>
                <div>
                <h5 class="font-bold">Password</h5>
                </div>
                </div>
            )
        }

        let buyerPhone = () => {
            return(
                <div>
                    <h4 class="font-bold">Phone Number</h4><br/>
                    <h5 class="font-bold">Home<br/>
                    6692789950
                    </h5>
                </div>
            )
        }



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
                    <div>
                    <div>
                    <h4 class="font-bold">Profile Picture</h4>
                    <img></img> 
                    </div>
                    </div>
                    
                    <div>
                    <div><h4 class="font-bold">Your Account</h4><br/>
                     <h5 class="font-bold">Name</h5>
                    </div>

                     <div>
                    <h5 class="font-bold">Email</h5>
                    </div>
                    <div>
                    <h5 class="font-bold">Password</h5>
                    </div>
                    </div>
                   
                   
                    <div>
                    <div>
                    <h4 class="font-bold">Phone Number</h4><br/>
                    <h5 class="font-bold">Home<br/>
                    6692789950
                    </h5>
                    </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default BuyerProfile;