import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class OwnerUpcomingOrders extends Component {


    constructor() {
        super();
        this.state = {
            upcOrders: [],
            status: "",
            id: 2
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

    statusChangeHandler = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    changeStatus = (e) => {

        const data = {
            status: this.state.status,
            //id: sessionStorage.getItem('rId')
            id: this.state.id
        }

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/changeStatus', data)
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 201) {
                    this.setState({
                        authFlag: true
                    })
                }
                else if (response.status === 200) {
                    this.setState({
                        authFlag: false,
                        msg: 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }


    deleteOrder = () => {

        const data = {
            //id: sessionStorage.getItem('rId')
            id: this.state.id
        }

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/deleteOrder', data)
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 201) {
                    this.setState({
                        authFlag: true
                    })
                }
                else if (response.status === 200) {
                    this.setState({
                        authFlag: false,
                        msg: 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }




    componentDidMount() {
        axios.post('http://localhost:3001/getUpcomingOrders')
            .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount of Upcoming orders")
                console.log(response)
                this.setState({
                    upcOrders: this.state.upcOrders.concat(response.data)
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }



    render() {
        let UpcOrders = this.state.upcOrders.map(upcOrders => {

            //var img = menu.imageUrl
            // var num=this.state.num;
            var item = upcOrders.items
            console.log("string", item)
            var arr = item.split(",")
            console.log("arr", arr)
            if (upcOrders != null)
                return (

                    <div class="container-fluid orders">
                        <div class="orders-card"></div>
                        <div>
                            <div class="col-md-3 inner-order">
                                <ul>
                                    <li class="list font"><h3>{upcOrders.name}</h3></li>
                                    <li class="list font1">{upcOrders.address}</li>
                                    <li class="list font1">Total: ${upcOrders.total}</li>
                                    <li class="list font1">{upcOrders.status}</li>
                                </ul>
                            </div>
                            <div class="col-md-6 inner-order">
                                <br /><br />
                                <button class="button">Cancel Order</button>
                                <select onChange={this.statusChangeHandler}>
                                    <option value="new">New</option>
                                    <option value="preparing">Preparing</option>
                                    <option value="ready">Ready</option>
                                    <option value="delivered">Delivered</option>
                                </select>
                                <button class="button" onClick={(e) => { this.changeStatus(e,upcOrders.id)
                                                        }}>Update Status</button>
                            </div>
                        </div>
                    </div>
                )

        })


        return (
            <div >
                <div>
                    <br />
                    <br />
                </div>
                <div class="col-md-3 profile-div">
                    <h3 class="font-bold">Your Account</h3><br />
                    <h5 class="font-bold" id="profile" ><div><a href="/oprofile">Profile</a></div></h5><br />
                    <h5 class="font-bold" id="phone" ><div><a href="/MenuList">Menu</a></div></h5><br />
                    <h5 class="font-bold" id="pOrders" ><div><a href="/oPastOrders">Past Orders</a></div></h5><br />
                    <h5 class="font-bold" id="uOrders" ><div><a href="/oUpcomingOrders">Upcoming Orders</a></div></h5><br />
                    <h5>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </h5>
                </div>
                <div>

                </div>

                <div>

                </div>

                <div class="col-md-9 profile-div">
                    <div><h1>Upcoming Orders</h1> <br />
                    </div>  <br />
                    <div>
                        {UpcOrders}
                    </div>
                </div>
            </div>
        )
    }
}

export default OwnerUpcomingOrders;



