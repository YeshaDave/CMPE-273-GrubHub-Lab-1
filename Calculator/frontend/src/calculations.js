import React, { Component } from 'react';
import './App.js';
import axios from 'axios';
import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
import './Calculations.css';

class calculations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: "",
            op: "",
        }

        this.onTextChange = this.onTextChange.bind(this)
        this.onButtonPress = this.onButtonPress.bind(this)
    }


    onTextChange = (e) => {
        this.setState({
            num: e.target.value
        })
        console.log(this.state.num)
    }


    onButtonPress = (e) => {
        console.log(e.target.value)
        var field = e.target.value
        console.log(field)
        this.setState({
            num: this.state.num + field
        })
    }

    onButtonPress1 = (e) => {
        console.log(e.target.value)
        var field = e.target.value
        console.log(field)
        this.setState({
            num: this.state.num
        })
        const data = {
            num: this.state.num
        }
        axios.post('http://localhost:3002/operation', data)
            .then(response => {
                e.preventDefault()
                console.log("Status Code : ", response);
                if (response.status === 201) {
                    this.setState({
                        authFlag: true,
                        num: response.data.data
                    })
                    if(response.data.data == null ){
                        this.setState({
                            authFlag: true,
                            num: "Infinity"
                        }) 
                    }
                }
                else {
                    this.setState({
                        authFlag: false,
                        num: 'Error'
                    })
                    console.log("in else")
                }
            });


    }
    onButtonPress2 = (e) => {
        this.setState({
            num: ""
        })
    }

    componentDidMount() {
        console.log("inside Comp did mount")

    }


    render() {
        console.log(this.state.num)
        return (

            <div className="title" class="container-fluid">
                <table border="1">
                    <tr>
                        <td colspan="2"><input type="text" value={this.state.num} onChange={this.onTextChange} id="result" name="result" /></td>
                    </tr>

                    <tr>
                        <td><input type="button" value="+" onClick={this.onButtonPress} className="button1" />
                            <input type="button" value="-" onClick={this.onButtonPress} className="button1" /> </td>
                    </tr>

                    <tr>
                        <td><input type="button" value="*" onClick={this.onButtonPress} className="button1" />
                            <input type="button" value="/" onClick={this.onButtonPress} className="button1" />
                        </td>

                    </tr>

                    <tr>
                        <td><input type="button" value="=" onClick={this.onButtonPress1} className="button2" /> </td>
                    </tr>


                    <tr>
                        <td><input type="button" value="CLR" onClick={this.onButtonPress2} className="button2" /> </td>
                    </tr>
                </table>
            </div>


        )
    }
}

export default calculations;