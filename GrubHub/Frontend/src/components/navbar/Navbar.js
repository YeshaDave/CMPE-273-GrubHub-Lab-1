import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class Navbar extends Component {


    render(){
        var dispName = null;
        var link1 = null;
        var link2 = null;
        console.log("role",localStorage.getItem('role'))
        console.log("navbar",localStorage.getItem('fName'))
        if(localStorage.getItem('role') == "buyer"){
            dispName = localStorage.getItem('fName')
            link1 = "/bprofile"
            link2 = "/blogin"
        }
        else if(localStorage.getItem('role') == "owner"){
            dispName = localStorage.getItem('name')
            link2 = "/ologin"
        }
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
                    <div><a href={link1}>
                    <div>Hi, {dispName}</div>
                    <div><img src="https://img.icons8.com/color/10/000000/expand-arrow.png"></img></div></a>
                    </div>
                    </li>
                    <li>
                    <div>  
                    <a href={link2}>Logout</a>
                    </div>
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



