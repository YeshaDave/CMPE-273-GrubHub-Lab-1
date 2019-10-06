import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class addSection extends Component {


    constructor() {
        super();
        this.state = {
            menu: [],
            sections: [],
            menu1: [],
            v1: []
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
        let Menu = Object.values(this.state.menu).map(menu1 => {
            console.log(menu1)
            return (
                <tr class="row-border">
                    {
                        Object.values(menu1).map(key => {
                            return (
                                <p>
                                    {
                                        key.map(v1 => {
                                            console.log(v1.name)
                                            return (
                                                <div>
                                                    <td class="column-dimensions">{v1.name}</td>
                                                    <td class="desc">{v1.desc}</td>
                                                    <td class="column-dimensions"><img src={v1.imageUrl} class="img-div1" /></td>
                                                    <td class="column-dimensions">{v1.price}$</td>
                                                    <td><button class="btn btn-primary button font" onClick={this.updateSection}>Update</button></td>
                                                    <td><button class="btn btn-primary button font">Delete</button></td>
                                                </div>
                                            )
                                        })
                                    }
                                </p>
                            )

                        })
                    }
                </tr>

            )
        })



        return (
            <div class="container-fluid items-div">
                <br />
                <div class="col-md-2 items-inner-div">
                    left div
            </div>
                <div class="col-md-10 items-inner-div">
                    <div>
                        <table class="table">
                            <thead>
                                <tr class="row-border">
                                    <th class="column-dimensions">Item</th>
                                    <th class="desc">Description</th>
                                    <th class="column-dimensions">Image</th>
                                    <th class="column-dimensions">Price</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Menu}
                                <tr>
                                    <td><button class="btn btn-primary button font">Add Item</button></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default addSection;



