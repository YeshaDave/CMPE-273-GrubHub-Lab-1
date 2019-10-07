import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';


class search extends Component {


    constructor() {
        super();

        this.state = {
            rest: [],
            sections: [],
            rName : "",
            rId : ""
        }
    }

    goTo = () => {
        this.setState = {
            rName: sessionStorage.getItem('rName'), 
            rId: sessionStorage.getItem('rId')   
        }
        console.log(this.state.rId)
        this.props.history.push({
            pathname: '/details',
            state: {rName : this.state.rName,
                    rId : this.state.rId}

        })
    }

    componentDidMount() {
        axios.post('http://localhost:3001/getRestaurants')
            .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                this.setState({
                    rest: this.state.rest.concat(response.data)
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });

            axios.post('http://localhost:3001/getSections')
                .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                this.setState({
                    sections : this.state.sections.concat(response.data) 
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }


    render(){

        let Sections = this.state.sections.map(sections => {
            if(sections != null)
            return(
                
                <div className="cuisine-div search"><img class="cuisine-div-img" src={sections.image}></img>
                <br/>{sections.section}
                </div>
                    // <div class="div-menu1"><img class="img-menu" src={img} /><button>{menu.price}</button></div>
               
            )
        })

        let Rest = this.state.rest.map(rest => {
            if(rest != null){
                return(
                <div class="div-menu outer-box1 rest" onClick={this.goTo}>
                    <div class="container1">
                            <img src={rest.rImage} class="img-div" />           
                    </div>
                                                    <h5>
                                                        <div class="div-menu2">
                                                            <p class="menu-name">{rest.restaurantName}</p>
                                                            <p class="menu-name">{rest.cuisine}</p>
                                                            <p class="menu-name">{rest.phone}</p>
                                                        <br />    
                                                    </div>
                                                    </h5>
                                                    <div>
                                                        <button onClick={() => {
                                                        this.props.history.push({
                                                        pathname: '/details',
                                                        state: {rName : rest.restaurantName,
                                                        rId : rest.id}})
                                                        }}>Details</button>
                                                    </div>
                </div>
                                           
                )}
        })


        return(
            <div class="col-md-12">
                
                <div>
                <div>
                <div class="col-md-6"></div> 
                <div class="col-md-2"><a href="/upcomingOrders"><h4>Past Orders</h4></a> </div>
                <div class="col-md-4">
                <h4><a  href="/pastOrders">Upcoming Orders</a></h4> </div> 
                </div> <br/>
                <div class="search">
                {Sections}
                </div>
                <br/><br/><br/><br/><br/><br/><br/>

                <div class="search">
                    <br/><br/>
                {Rest}
                

                </div>
                </div>
            </div>
        )
    }
}


export default search;