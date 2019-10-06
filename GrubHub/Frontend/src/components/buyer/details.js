import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';
// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//import Popup from "reactjs-popup";
import Modal from 'react-responsive-modal';


class details extends Component {

    constructor() {
        super();

        this.state = {
            menu: [],
            isClick: "no",
            number: 0,
            itemList : "" 
        }
        // this.handleChange = this.handleChange.bind(this);
        this.diplay = this.display.bind(this)
       // this.addtoCart = this.addtoCart.bind(this,itemName)
    }




    // increase() {
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // }

    // decrease() {
    //     this.setState({
    //         value: this.state.value - 1
    //     })
    // }

    display = () => {
        console.log("inside display")
        this.setState({
            isClick: "yes",
            open: false
        })
    }

    onOpenModal = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };



    addtoCart = (itemName) => {
        console.log("Here i am baby: ", itemName.name )
        const data = {
            itemList : itemName
        }
        // var itemL = this.state.itemList.concat(",",sessionStorage.getItem('itemList'))
        // console.log(itemL)
        // const data = {
        //     number : this.state.number,
        //     itemList : itemL
        //    // rName : localStorage.getItem('rName')
        // }
        // console.log("inside add to cart")
        axios.post('http://localhost:3001/addtoCart',data)
        .then((response) => {
            console.log("Status Code : ",response.status);
            if(response.status === 201){
                this.setState({
                    flag : true
                })
            }else{
                this.setState({
                    flag : false,
                    msg : 'Section already exists!'
                })
            }
        })
    }

    
    numberChangeHandler = (e) => {
        this.setState({
            number : e.target.value
        })
      }

    componentDidMount() {
        axios.post('http://localhost:3001/getMenu')
            .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                this.setState({
                    menu: this.state.menu.concat(response.data)
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }


    render() {
        let Popup;
        const isClick = this.state.isClick;

        if (isClick == "yes") {
            Popup = (
                <div id="id01" class="w3-modal">
                    <div class="w3-modal-content w3-card-4">
                        <div>
                           Cart
                </div>

                    </div>
                </div>
            )
        }

        else if (isClick == "no") {
            Popup = (
                <div></div>
            )
        }


        let Menu = Object.values(this.state.menu).map(menu1 => {
            console.log(menu1)
            return (
                <tr class="row-border">
                    {
                        Object.keys(menu1).map(key => {
                            console.log(key)

                            return (
                                <div class="c1"><th class="th1"><br />{key}<br /><br />
                                    {
                                        menu1[key].map(v1 => {
                                            console.log(v1)
                                            return (
                                                <div class="div-menu outer-box1">
                                                    <h5>
                                                        <div class="div-menu1">
                                                            <p class="menu-name">{v1.name}</p>
                                                            {sessionStorage.setItem('itemList',v1.name)}
                                                            <br />
                                                            {v1.desc}
                                                        </div></h5>

                                                    <div class="container1">
                                                        <img src={v1.imageUrl} class="img-div" />
                                                        <button class="btn" className="button-div" onClick={(e) => {this.onOpenModal(e)}}>${v1.price}+</button>
                                                        <Modal open={this.state.open} center focusTrappedr>
                                                            <form action="">
                                                                <p>
                                                                    <label>
                                                                        Select Quantity
                                                                        <input type="number" name="number" onChange={this.numberChangeHandler}/>
                                                                    </label>
                                                                </p>
                                                                <button onClick={(v1) => {this.addtoCart(v1)}}>Submit</button>
                                                                <button>Cancel</button>
                                                            </form>
                                                        </Modal>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                </th> </div>
                            )

                        })
                    }
                </tr>

            )
        })




        return (
            <div class="popup container-fluid">
                <br />
                <div class="col-sm-9 details-main-divs">
                    <div class="details-div">
                        <div class="rest-img">


                            <img src="https://platinumroyalties.com/wp-content/uploads/2018/01/bjs.jpg" class="logo"></img></div>
                        <div>
                            <h2 class="rest-name-div">Restaurant Name</h2>
                            <h5 class="rest-name-div">Address</h5>
                        </div>
                    </div>
                    <div class="details-div popup">
                        {Menu}

                    </div>
                </div>
                <div class="col-sm-3 details-main-divs">
                    {Popup}
                </div>
            </div>
        )
    }
}

export default details;





