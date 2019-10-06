import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class OwnerHome extends Component {


    constructor(){
        super();
        
    }  


   

    
    render() {
       
        

        return(
            <div>
            <div class="home-background">
            <br/>
            <br/><br/>
            <br/>
            <div class="col-md-3"></div>
            <div class="col-md-5 div-home">
            <h2 class="title-font-white">Who delivers in your neighborhood?</h2>
                <input type="text" class="search-bar" name="search" id="search"></input>
                <button class="search-bar-find search-bar-text">Find food</button>
                <br></br><br/><br/>
            </div>
            <div class="col-md-2"></div>
            <br/><br/><br/><br/><br/><br/>
            </div>
            <div class="container">
                <br/>
                <div class="col-md-2">
                </div>
                <div class="col-md-10">
                <h1 class="title-font"> Your Orders</h1><br/>
                <div class="order-div">
                <div class="order-div-img"><img class="order-div-img" src="https://res.cloudinary.com/grubhub-assets/image/upload/v1505252159/GHS_Food_Utensils-01_r01gfk.svg" alt="Fallback image"/>
                </div>
                <div class="order-div-text">
                    Mix it up! Try a new restaurant today<br/>
                </div>
                <div class="order-div-link">
                <a href="/search">Find local options</a>
                </div>
                </div>
                </div>
                <h5><a>See all past orders</a></h5>
            </div>

        </div>
        )
    }
}

export default OwnerHome;



