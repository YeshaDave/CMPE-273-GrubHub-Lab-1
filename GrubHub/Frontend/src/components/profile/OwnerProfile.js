import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';

class OwnerProfile extends Component {

    constructor(props) {
        super(props);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.restChangeHandler = this.restChangeHandler.bind(this);
        this.zipChangeHandler = this.zipChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.phoneChangeHandler = this.phoneChangeHandler.bind(this);
        this.cuisineChangeHandler = this.cuisineChangeHandler.bind(this);
        this.state = {isComponent: ""};
      }


    nameChangeHandler() {
        this.setState({isComponent: "name"});
      }

      restChangeHandler() {
        this.setState({isComponent: "rest"});
      }

      zipChangeHandler() {
        this.setState({isComponent: "zip"});
      }

      emailChangeHandler() {
        this.setState({isComponent: "email"});
      }

      phoneChangeHandler() {
        this.setState({isComponent: "phone"});
      }

      cuisineChangeHandler() {
        this.setState({isComponent: "cuisine"});
      }

      nameChangeHandler = (e) => {
        this.setState({
            name : e.target.value
        })
      }

      restChangeHandler = (e) => {
        this.setState({
            restname : e.target.value
        })
      }

      zipChangeHandler = (e) => {
        this.setState({
            zip : e.target.value
        })
      }

      emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
      }

      phoneChangeHandler = (e) => {
        this.setState({
            phone : e.target.value
        })
      }

      cuisineChangeHandler = (e) => {
        this.setState({
            cuisine : e.target.value
        })
      }


      editName = (e) => {
        e.preventDefault();
        const data = {
            name : this.state.name,
            email : localStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editOwnerName',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }

    editRest = (e) => {
        e.preventDefault();
        const data = {
            rest : this.state.rest,
            email : localStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editRestName',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }

    editZip = (e) => {
        e.preventDefault();
        const data = {
            zip : this.state.zip,
            email : localStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editZip',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }

    editEmail = (e) => {
        e.preventDefault();
        const data = {
            email1 : this.state.email,
            email2 : localStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editOwnerEmail',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }

    editPhone = (e) => {
        e.preventDefault();
        const data = {
            phone : this.state.phone,
            email : localStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editOwnerPhone',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }

    editCuisine = (e) => {
        e.preventDefault();
        const data = {
            cuisine : this.state.cuisine,
            email : localStorage.getItem('email')
        }
        console.log(data);
        console.log("inside edit phone");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/editCuisine',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }
                else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Credentials do not match!'
                    })
                    console.log("in else")
                }
            });
    }






    render() {
        const isComponent = this.state.isComponent;
        console.log(isComponent);
        let Contents = null;
        var name = localStorage.getItem('name')
        var rest = localStorage.getItem('restaurantName')
        var email = localStorage.getItem('email')
        var zip = localStorage.getItem('zipCode')
        var phone = localStorage.getItem('phone')
        var cuisine = localStorage.getItem('cuisine')

        //if(isComponent == "name"){    
          let Contents1 = (
            <div>
                <h5>Your Name</h5><br/>
                <input type="text"onChange={this.nameChangeHandler} placeholder={name} value="yesha"></input><br/>
                <button onClick={this.editName}>Edit Name</button>
            </div>);
       // }

        //else if(isComponent == "rest"){
            let Contents2 = (
            <div>
                <h5>Restaurant Name</h5><br/>
                <input type="text" onChange={this.restChangeHandler} placeholder={rest} value="qwer"></input><br/>
                <button onClick={this.editRest}>Edit Restaurant Name</button>
            </div>);
        //}

       // else if(isComponent == "zip"){
            let Contents3 = (
            <div>
                <h5>Zip Code</h5><br/>
                <input type="text" onChange={this.zipChangeHandler} placeholder={zip} value="1111"></input><br/>
                <button onClick={this.editZip}>Edit Zip Code</button>
            </div>);
        //}

        // else if(isComponent == "email"){
            let Contents4 = (
                <div>
                <h5>Email</h5><br/>
                <input type="text" onChange={this.emailChangeHandler} placeholder={email} value="y@y.com"></input><br/>
                <button onClick={this.editEmail}>Edit Email</button>
                </div>);
        // }

        // else if(isComponent == "phone"){
            let Contents5 = (
                <div>
                <h5>Phone</h5><br/>
                <input type="text" onChange={this.phoneChangeHandler} placeholder={phone}></input><br/>
                <button onClick={this.editPhone}>Edit Phone</button>
            </div>);
  

       
            let Contents6 = (
            <div>
                <h5>Cuisine</h5><br/>
                <input type="text" onChange={this.cuisineChangeHandler} placeholder={cuisine}></input><br/>
                <button onClick={this.editCuisine}>Edit Cuisine</button>
            </div>);
       

        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                
                <div></div>

                <div class="col-md-8 profile-div">
                <div>
                    <h5 class="font-bold" id="image">Image</h5><br/>
                </div>
                <div>
                    <h5 class="font-bold" id="name" onChange = {this.nameChangeHandler}>Name</h5><br/>
                    {Contents1}
                </div>
                <div>
                <h5 class="font-bold" id="restName" onChange = {this.restChangeHandler}>Restaurant Name</h5><br/>
                {Contents2}
                </div>
                {/* <h5 class="font-bold" id="profilePicture" onChange = {this.addressChangeHandler}><a>Address</a></h5><br/> */}
                <div>
                <h5 class="font-bold" id="zip" onChange = {this.zipChangeHandler}>ZipCode</h5><br/>
                {Contents3}
                </div>
                <div>
                <h5 class="font-bold" id="email" onChange = {this.emailChangeHandler}>Email</h5><br/>
                {Contents4}
                </div>

                <div>
                <h5 class="font-bold" id="phone" onChange = {this.phoneChangeHandler}>Phone</h5><br/>
                {Contents5}
                </div>

                <div>
                <h5 class="font-bold" id="cuisine" onChange = {this.cuisineChangeHandler}>Cuisine</h5><br/>
                {Contents6}
                </div>
                </div>
                <div>
                    {Contents}
                </div>
            </div>
        )
    }
}

export default OwnerProfile;