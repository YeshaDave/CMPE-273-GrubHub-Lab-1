import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';


class search extends Component {

    render(){
        return(
            <div class="col-md-12">
                {/* <div class="col-sm-3 search-page-div">
                    <h3 class="filter">Filters </h3><a>Clear all</a>
                    <h4>All Cuisines</h4>
                    Cuisines List
                </div> */}
                <div>
                <div>
                <div className="cuisine-div"><img class="cuisine-div-img" src="http://metroexpresspizza.com/images/menu/italian-sub.png"></img></div>
                </div>
                <div>
                    <br/><br/>
                Restaurants
                

                </div>
                </div>
            </div>
        )
    }
}


export default search;