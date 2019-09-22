import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class Navbar extends Component {


    render(){

        return(
            <div>
                <nav class="Navbar-div">
                <div class="container-fluid">
                    <div class="navbar-header col-md-2">
                        <a class="Navbar navbar-brand navbar-nav" href=""></a>
                    </div>
                    <div class="col-md-1">Address</div>
                    <div class="col-md-2" style={{borderColor:"#000000"}}>
                    <input type="text" class="searchbar" placeholder="      Pizza, sushi, chinese" name="search" id="search"></input>
                    </div>
                    <div class="col-md-7">
                    <ul class="nav navbar-nav">
                        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li class="bag-icon">
                    <div>Hi, Yesha</div>
                    <div><img src="https://img.icons8.com/color/10/000000/expand-arrow.png"></img></div>
                    </li>
                    <li>
                    
                    </li>
                    <li>
                    <div>  
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/shopping-bag.png"></img>
                    </div>
                    
                    </li>
                    </ul>
                    </div>
                </div>
                
            </nav> 
            </div>

        )
    }

}

export default Navbar;

