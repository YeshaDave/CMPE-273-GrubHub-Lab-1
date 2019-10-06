import React, {Component} from 'react';
import '../../App.css';
//import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class BuyerHome extends Component {


    constructor(){
        super();
        this.state = {  
            books : [],
        }
    }  


    // pictureChangeHandler = (e) => {
    //     this.setState({
    //         profilePicture : e.currentTarget.id
    //     })
    // }

    // profileChangeHandler = (e) => {
    //     this.setState({
    //         profile : e.currentTarget.id
    //     })
    // }

    // phoneChangeHandler = (e) => {
    //     this.setState({
    //         phone : e.currentTarget.id
    //     })
    // }

    componentDidMount(){
        axios.get('http://localhost:3001/getOrders')
                .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                this.setState({
                    books : this.state.books.concat(response.data) 
                });
                this.state =  { authFlag2: cookie.load('cookie') }
                console.log(this.state.authFlag2);
            });
    }

    render() {
       
        

        return(
            <div>
                <div>
                    <h4>
                        Name
                    </h4><br/>
                    <h5>
                        Address
                    </h5><br/>
                    <h5>
                        
                    </h5>
                    <h5>
                        Order Status
                    </h5>
                </div>
            </div>
        )
    }
}

export default BuyerHome;



