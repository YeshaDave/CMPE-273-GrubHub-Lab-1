import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import uuid from 'uuid/v1';

class BuyerLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }

        // this.emailChangeHandler = this.emailChangeHandler.bind(this);
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        // this.submitLogin = this.submitLogin.bind(this);
    }

    componentWillMount(){
        
    }

    renderEmail(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="email" {...field.input} required/>
                <div className="text-help" style={{color:"#F5160B"}}>
                    {touched ? error : ""}
                </div>
            </div>
        );
    }
    renderPassword(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="password" {...field.input} required/>
                <div className="text-help" style={{color:"#F5160B"}}>
                    {touched ? error : ""}
                </div>
            </div>
        );
    }
    


    
        submitLogin(values) {
            this.props.login(values);
            console.log(this);
        }






    render(){
        let redirectVar = null;
        console.log("inside login.js")
        if(this.props.authFlag == true){
            redirectVar = <Redirect to= "/BuyerHome"/>
            
        }

        const { handleSubmit } = this.props;

        return(
            <div>
                {redirectVar}
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            
                                <div className="col-md-4"></div>
                                <div className="col-md-4  outer-box">
                                <div className="col-md-12">   
                                <h3 class="font-bold">Sign in with your Grubhub account</h3>
                                
                                </div>
                                
                                <form onSubmit={handleSubmit(this.submitLogin.bind(this))}>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <p class="msg-text">{this.props.errormsg}</p>
                                    <br/>
                                    <Field label="Email" name="email" component={this.renderEmail}/>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <br/>
                                    <Field label="Password" name="password" component={this.renderPassword}/>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in           <span class="div-text2"><a>Reset Password</a></span></span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12 login-button"><img class="button-img" src="https://www.grubhub.com/img-hashed/grubhub_logo_img-f32224c65999bc87a7d65983e133e9fd.svg"></img>Sign In</button>
                                    <br/><br/><br></br>
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        or
                                    </div>
                                    <div class="div-text">
                                    <br/>
                                        <a href="/bsignup">Create your account </a>
                                    </div>
                                    </form>
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



function formValidation(values) {

    const errors = {};

    // Validate the inputs from 'values'
    if (!values.email) {
        errors.email = "Enter an Email";
    }
    if (!values.password) {
        errors.password = "Enter Password";
    }
    return errors;
}



const mapStateToProps = state => {
    return {
        authFlag: state.loginreducer.authFlag,
        errormsg: state.loginreducer.errormsg
    }
}




const mapDispatchStateToProps = dispatch => {
    return {
        login: (values) => {
            const data = {
                email: values.email,
                password: values.password
            }
            console.log(data);
            axios.defaults.withCredentials = true;
            axios.post('http://54.183.178.69:3001/buyerLogin1', data)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    const decoded = jwt_decode(response.data.token);
                    console.log(decoded);
                    console.log(response.data)
                    localStorage.setItem('buyer_email', decoded.email);
                    // localStorage.setItem('decoded_id', decoded.id);
                    // localStorage.setItem('decoded_fname', decoded.fname);
                    sessionStorage.setItem('email', response.data.data.email);
                    sessionStorage.setItem('fName',response.data.data.fName )
                    sessionStorage.setItem('lName',response.data.data.lName )
                    sessionStorage.setItem('phone',response.data.data.phone )

                    sessionStorage.setItem("orderID",uuid())
                    // localStorage.setItem('results',response.data)
                    sessionStorage.setItem('role',"buyer")
                    // localStorage.setItem('email',response.data.email )
                    // localStorage.setItem('fName',response.data.fName )
                    // localStorage.setItem('lName',response.data.lName )
                    // localStorage.setItem('phone',response.data.phone )
                    dispatch({ type: 'LOGIN', payload: response.data, statusCode: response.status })
                })
                .catch(error => {
                    console.log(error)
                    // dispatch({ type: 'LOGIN', payload: error.response, statusCode: error.response.status })
                })
        }
    }
}





export default reduxForm({
    formValidation,
    form: "loginreducer"
})(connect(mapStateToProps, mapDispatchStateToProps)(BuyerLogin));
