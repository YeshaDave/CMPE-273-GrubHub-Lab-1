import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class OwnerSignin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fName : "",
            lName : "",
            // email : "",
            // phone : "",
            // password : "",
            authFlag : false,
            errormsg : ""
       }
       }
       componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    // nameChangeHandler = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }

    // restNameChangeHandler = (e) => {
    //     this.setState({
    //         restName : e.target.value
    //     })
    // }

    // zCodeChangeHandler = (e) => {
    //     this.setState({
    //         zCode : e.target.value
    //     })
    // }


    // emailChangeHandler = (e) => {
    //     this.setState({
    //         email : e.target.value
    //     })
    // }

    // passwordChangeHandler = (e) => {
    //     this.setState({
    //         password : e.target.value
    //     })
    // }


    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>

        )
    }

    renderEmail(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label style={{ textAlign: 'left' }}>{field.label}</label>
                <input className="form-control" type="email" {...field.input} />
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
                <input className="form-control" type="password" {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>

        )
    }


    submitLogin(values) {
        this.props.signup(values);
        console.log(this);
    }
    // submitSignup = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         name : this.state.name,
    //         restName : this.state.restName,
    //         email : this.state.email,
    //         zCode : this.state.zCode,
    //         password : this.state.password,
    //     }
    //     console.log(data);

    //     console.log("inside submit signup");
    //     //set the with credentials to true
    //     axios.defaults.withCredentials = true;
    //     //make a post request with the user data
    //     axios.post('http://54.183.178.69:3001/ownerSignup1',data)
    //         .then(response => {
    //             console.log("Status Code : ",response.status);
    //             if(response.status === 201){
    //                 this.setState({
    //                     authFlag : true
    //                 })
    //             }else if(response.status === 200){
    //                 this.setState({
    //                     authFlag : false,
    //                     msg : 'Error in signup!'
    //                 })
    //                 console.log("in else")
    //             }
    //             else if(response.status === 203){
    //                 this.setState({
    //                     authFlag : false,
    //                     msg : "Email exists"
    //                 })
    //             }
    //         });
    // }

    render(){

        let redirectVar = null;
        if(this.props.authFlag == true){
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
                            <form onSubmit={handleSubmit(this.submitLogin.bind(this))}>

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
                                    <Field name="name" component={this.renderField}/>

                                    {/* <input type="text" class="form-control" name="name" onChange={this.nameChangeHandler} required /> */}
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/><br/>
                                    Email<br/>
                                    <Field name="email" component={this.renderEmail}/>
                                    {/* <input type="email" class="form-control" name="email" onChange={this.emailChangeHandler} required /> */}
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
                                    <div className="col-md-8">
                                    <Field name="restName" component={this.renderField}/>
                                        {/* <input type="text" class="form-control" name="restName" onChange={this.restNameChangeHandler} required/> */}
                                    </div>
                                   
                                    <div className="col-md-4">
                                    <Field name="zCode" component={this.renderField}/>
                                        {/* <input type="text" class="form-control" name="zCode" required pattern="\d{1,8}" onChange={this.zCodeChangeHandler} required/> */}
                                    </div>
                                    <br/></div>
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password<br/>
                                    <Field name="password" component={this.renderPassword}/>
                                    {/* <input type="password" class="form-control" name="password" pattern="[A-Za-z0-9]{4,10}" onChange={this.passwordChangeHandler} required /> */}
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
                                </form>
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
    
    if(!values.name){
        errors.name = "Enter Name";
    }
    
    if(!values.restName){
        errors.restName = "Enter Restaurant Name";
    }
    
    if(!values.email){
        errors.email = "Enter a valid email id";
    }
    
    if(!values.password){
        errors.password = "Enter a password";
    }

    if(!values.zCode){
        errors.zCode = "Enter a zip code";
    }
    
    
    
    }
    
    const mapStateToProps = state => {
        return {
            authFlag: state.bSignup.authFlag,
            errormsg: state.bSignup.errormsg
        }
    }
    
    
    
    const mapDispatchStateToProps = dispatch => {
        return {
            signup: (values) => {
                const data = {
                    name : values.name,
                    restName : values.restName,
                    zCode : values.zCode,
                    email: values.email,
                    password: values.password
                }
                //data["isRecruiter"] = recruiter
    
                axios.defaults.withCredentials = true;
                axios.post('http://54.183.178.69:3001/ownerSignup1', data)
                    .then((response) => {
                        console.log(response.data)
                        dispatch({ type: 'SIGNUP', payload: response.data, statusCode: response.status })
                    })
                    .catch((error) => {
                        dispatch({ type: 'SIGNUP', payload: error.response.data, statusCode: error.response.data.status })
                    });
            }
        }
    }

    export default reduxForm({
        validate,
        form: "bSignup"
    })(connect(mapStateToProps, mapDispatchStateToProps)(OwnerSignin));
    