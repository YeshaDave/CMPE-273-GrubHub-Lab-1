import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class OwnerLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }

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
        this.props.ologin(values);
        console.log(this);
    }

    

    render(){
        let redirectVar = null;
        console.log("inside login.js")
        if(this.props.authFlag){
            redirectVar = <Redirect to= "/"/>
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
                                <div className="col-md-5">
                                <div className="col-md-12">   
                                </div>
                                <div class="form-group" className="col-md-12">
                                <img class="img-size" src="https://restaurant.grubhub.com/img/gfr-horizontal-black_exoFEG-d4f8c467.svg"></img>
                                </div>
                                <form onSubmit={handleSubmit(this.submitLogin.bind(this))}>
                                   
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <p class="msg-text">
                                    {this.props.errormsg}</p>
                                    <br/>
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
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Remember me</span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12">Sign In</button>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    <br/>
                                    <a>Forgot Username</a>
                                    <br/>
                                    <br/>
                                    <a>Forgot Password</a>
                                    </div>
                                </form>
                                </div>   
                                <div className="col-md-3"></div>  
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
        ologin: (values) => {
            const data = {
                email: values.email,
                password: values.password
            }
            console.log(data);
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/ownerlogin', data)
                .then(response => {
                    localStorage.setItem('results',response.data)
                    localStorage.setItem('role',"owner")
                    localStorage.setItem('email',response.data.email )
                    localStorage.setItem('phone',response.data.phone )
                    localStorage.setItem('cuisine',response.data.cuisine )
                    localStorage.setItem('name',response.data.name )
                    localStorage.setItem('restaurantName',response.data.restaurantName )
                    localStorage.setItem('zipCode',response.data.zipCode )
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
    form: "ologin"
})(connect(mapStateToProps, mapDispatchStateToProps)(OwnerLogin));

