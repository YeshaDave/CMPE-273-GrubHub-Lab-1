import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class OwnerSignin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fName : "",
            lName : "",
            email : "",
            phone : "",
            password : "",
            authFlag : false,
            msg : ""
       }
       }
       componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    nameChangeHandler = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    restNameChangeHandler = (e) => {
        this.setState({
            restName : e.target.value
        })
    }

    zCodeChangeHandler = (e) => {
        this.setState({
            zCode : e.target.value
        })
    }


    emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    submitSignup = (e) => {
        e.preventDefault();
        const data = {
            name : this.state.name,
            restName : this.state.restName,
            email : this.state.email,
            zCode : this.state.zCode,
            password : this.state.password,
            cuisine : "",
            phone : ""
        }

        console.log(data);

        console.log("inside submit signup");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/ownerSignup',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        msg : 'Error in signup!'
                    })
                    console.log("in else")
                }
                else if(response.status === 203){
                    this.setState({
                        authFlag : false,
                        msg : "Email exists"
                    })
                }
            });
    }

    render(){

        let redirectVar = null;
        if(this.state.authFlag){
            redirectVar = <Redirect to = "/ologin" />
        }
        const { handleSubmit } = this.props;
        //console.log(this.props.errormsg)

        return(
            <div>
                {redirectVar}
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            
                                <div className="col-md-3"></div>
                                <div className="col-md-5 outer-box">
                                <div className="col-md-12">   
                                </div>
                                <div class="form-group" className="col-md-12">
                                <img class="img-size" src="https://restaurant.grubhub.com/img/gfr-horizontal-black_exoFEG-d4f8c467.svg"></img>
                                </div>
                                    <div class="form-group" className="col-md-12">
                                        
                                    <br/><p>{this.state.msg}</p><br/>
                                    Name<br/>
                                    <input type="text" class="form-control" name="name" onChange={this.nameChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/><br/>
                                    Email<br/>
                                    <input type="email" class="form-control" name="email" onChange={this.emailChangeHandler} required />
                                    <br/>
                                    </div>
                                    <div class="form-group" >
                                    <div >
                                        <br/><br/>
                                    <span className="col-md-8">Restaurant Name</span>
                                    
                                    <span className="col-md-4">Zip Code</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="col-md-8"><input type="text" class="form-control" name="restName" onChange={this.restNameChangeHandler} required/></div>
                                   
                                    <div className="col-md-4"><input type="text" class="form-control" name="zCode" required pattern="\d{1,8}" onChange={this.zCodeChangeHandler} required/></div>
                                    <br/></div>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password<br/>
                                    <input type="password" class="form-control" name="password" pattern="[A-Za-z0-9]{4,10}" onChange={this.passwordChangeHandler} required />
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    
                                    <br/>
                                    <button class="btn btn-primary col-md-12" onClick={this.submitSignup}>Sign In</button>
                                    </div>
                                    <div className="col-md-12 div-text">
                                    <br/>
                                    or
                                    <br/>
                                    Have an account?<a href="/ologin">Log in</a>
                                    <br/>
                                    </div>
                                </div>   
                                <div className="col-md-4"></div>  
                            </div>           
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default OwnerSignin;