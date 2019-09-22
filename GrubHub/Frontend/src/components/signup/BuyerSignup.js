import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import jwt_decode from 'jwt-decode';


class BuyerSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
       }
       }

    renderName(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control login-signup" type="text" {...field.input}/>
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }


    renderEmail(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control login-signup" type="email" {...field.input}/>
                <div className="text-help">
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
                <input className="form-control login-signup" type="password" {...field.input}/>
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }




    onSubmit(values){
        this.props.login(values);
    }

    render(){

        let redirectVar = null;
        if(this.props.authFlag){
            redirectVar = <Redirect to = "/login/blogin" />
        }
        const { handleSubmit } = this.props;
        console.log(this.props.errormsg)

        return(
            <div>
                <div class="container">
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            
                        </div>
                        
                            <div class="form-group">
                            
                                <div className="col-md-4"></div>
                                <div className="col-md-4  outer-box">
                                <div className="col-md-12">   
                                <h3>Create your account</h3>
                                <br/>
                                </div>
                                    <br/><br/>
                                    <div className="col-md-12">
                                    <span className="col-md-5">First Name:</span>
                                    <span className="col-md-2"></span>
                                    <span className="col-md-5">Last Name:</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="col-md-6"><Field label="First Name" name="firstname" component={this.renderName}/></div>
                                    <div className="col-md-6"><Field label="Last Name" name="lastname" component={this.renderName}/></div>
                                    <br/></div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Email<br/>
                                    <Field label="Email" name="email" component={this.renderEmail}/>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password (8 charactar minimum)<br/>
                                    <Field label="Password" name="password" component={this.renderPassword}/>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in</span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12 button">Create your account</button>
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        or
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        Have an account? <a>Sign in</a>
                                    <br/>
                                    <br/>
                                    By creating your Grubhub account, you agree to the <a>Terms of Use</a> and <a>Privacy Policy</a>.
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



function validate(values){

let errors = {};

if(!values.firstname){
    errors.firstname = "Enter First Name";
}

if(!values.lastname){
    errors.lastname = "Enter Last Name";
}

if(!values.email){
    errors.email = "Enter a valid email id";
}

if(!values.password){
    errors.password = "Enter a password";
}

}

const mapStateToProps = state => {
    return{
        authFlag: state.appreducer.authFlag,
        errormsg: state.appreducer.errormsg
    }
}


const mapDispatchStateToProps = dispatch => {
    return {
        login:(values) =>{
            const data = {
                email: values.email,
                password: values.password,
                fName: values.fName,
                lName: values.lName,
                phone: values.phone,
                isPatient : true
            }
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/signup', data)
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    const decoded = jwt_decode(response.data.token)
                    localStorage.setItem('email',decoded.email )
                    localStorage.setItem('name',decoded.name )
                    localStorage.setItem('isPatient',decoded.userType )
                    localStorage.setItem('phone',decoded.phone )
                    dispatch({type: 'SIGNUP', payload: response.data, statusCode: response.status})
                })
                .catch(error => {
                    console.log(error)
                    dispatch({type: 'SIGNUP', payload: error.response, statusCode: error.response.status})
                })
        } 
    }
}

const Form1 = ({validate, form: "BuyerSignup"})(connect(mapStateToProps, mapDispatchStateToProps)(BuyerSignup));

export default Form1;