import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class upcomingOrders extends Component{


    render(){

        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                <h5 class="font-bold" id="profilePicture" ><div onClick={this.handlePictureClick}>Profile Picture</div></h5><br/>
                <h5 class="font-bold" id="profile" ><div onClick={this.handleProfileClick}>Profile</div></h5><br/>
                <h5 class="font-bold" id="phone" ><div onClick={this.handlePhoneClick}>Phone</div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div onClick={this.handlePhoneClick}>Past Orders</div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div onClick={this.handlePhoneClick}>Upcoming Orders</div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                
                

                <div class="col-md-8 profile-div" id="components">
               
                </div>
            </div>
        )
    }
}

export default upcomingOrders;