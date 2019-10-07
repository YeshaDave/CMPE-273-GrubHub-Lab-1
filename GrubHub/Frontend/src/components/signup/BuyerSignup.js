import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from "react-redux";
//import { Field, reduxForm } from "redux-form";
import jwt_decode from 'jwt-decode';
import uuid from 'react-native-uuid';

class BuyerSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fName: "",
          lName: "",
          email: "",
          password: "",
          phone: "",
          errormsg: "",
          authFlag: ""
       }
       }
   
    fNamechangeHandler = (e) => {
        this.setState({
            fName : e.target.value
        })
    }

    lNamechangeHandler = (e) => {
        this.setState({
            lName : e.target.value
        })
    }

    emailchangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    phonechangeHandler = (e) => {
        this.setState({
            phone : e.target.value
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
            fName : this.state.fName,
            lName : this.state.lName,
            email : this.state.email,
            password : this.state.password,
            phone: this.state.phone,
        }
        

        console.log(data);

        console.log("inside submit signup");
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/buyerSignup',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 201){
                    this.setState({
                        authFlag : true
                    })
                }else if(response.status === 200){
                    this.setState({
                        authFlag : false,
                        errormsg : 'Error in signup!'
                    })
                    console.log("in else")
                }
                else if(response.status === 203){
                    this.setState({
                        authFlag : false,
                        errormsg : "Email exists"
                    })
                }
            });
    }

    render(){

        let redirectVar = null;
        if(this.state.authFlag){
            redirectVar = <Redirect to = "blogin" />
        }
        const { handleSubmit } = this.props;
        //console.log(this.state.errormsg)

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
                                <h3>Create your account</h3>
                                <br/>
                                </div>
                                    <br/><br/>
                                    <div className="col-md-12" class="form-group">
                                    <span className="col-md-5">First Name:</span>
                                    <span className="col-md-2"></span>
                                    <span className="col-md-5">Last Name:</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="container-fluid" class="form-group">
                                    <span className="col-md-3"><input type="text" name="fName" onChange={this.fNamechangeHandler}></input></span>
                                        
                                    <span className="col-md-2"></span>
                                    <span className="col-md-3">
                                    <input type="text" name="lName" onChange={this.lNamechangeHandler}></input></span>
                                        {/* <Field label="Last Name" name="lastname" component={this.renderName}/> */}
                                        </div> 
                                    <br/></div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Email<br/>
                                    <input type="email" name="email" onChange={this.emailchangeHandler}></input>
                                    {/* <Field label="Email" name="email" component={this.renderEmail}/> */}</div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Phone<br/>
                                    <input type="text" name="text" onChange={this.phonechangeHandler}></input>
                                    {/* <Field label="Email" name="email" component={this.renderEmail}/> */}</div>
                                    
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password (8 charactar minimum)<br/>
                                    <input type="password" name="password" onChange={this.passwordChangeHandler}></input>
                                    {/* <Field label="Password" name="password" component={this.renderPassword}/> */}
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    {/* <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in</span><br/> */}
                                    <br/>
                                    <button class="btn btn-primary col-md-12 button" onClick={this.submitSignup}>Create your account</button>
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
                                </div>   
                                <div className="col-md-4"></div>  
                            </div>           
                        </div>
                </div>
            </div>
        )
    }
}

export default BuyerSignup;

// function validate(values){

// let errors = {};

// if(!values.firstname){
//     errors.firstname = "Enter First Name";
// }

// if(!values.lastname){
//     errors.lastname = "Enter Last Name";
// }

// if(!values.email){
//     errors.email = "Enter a valid email id";
// }

// if(!values.password){
//     errors.password = "Enter a password";
// }

// }

// const mapStateToProps = state => {
//     return{
//         authFlag: state.appreducer.authFlag,
//         errormsg: state.appreducer.errormsg
//     }
// }


// const mapDispatchStateToProps = dispatch => {
//     return {
//         login:(values) =>{
//             const data = {
//                 email: values.email,
//                 password: values.password,
//                 fName: values.fName,
//                 lName: values.lName,
//                 phone: values.phone,
//                 isPatient : true
//             }
//             axios.defaults.withCredentials = true;
//             // axios.post('http://localhost:3001/signup', data)
//             //     .then(response => {
//             //         sessionStorage.setItem('token', response.data.token)
//             //         const decoded = jwt_decode(response.data.token)
//             //         sessionStorage.setItem('email',decoded.email )
//             //         sessionStorage.setItem('name',decoded.name )
//             //         sessionStorage.setItem('isPatient',decoded.userType )
//             //         sessionStorage.setItem('phone',decoded.phone )
//             //         dispatch({type: 'SIGNUP', payload: response.data, statusCode: response.status})
//             //     })
//             //     .catch(error => {
//             //         console.log(error)
//             //         dispatch({type: 'SIGNUP', payload: error.response, statusCode: error.response.status})
//             //     })
//         } 
//     }
// }

// const Form1 = ({validate, form: "BuyerSignup"})(connect(mapStateToProps, mapDispatchStateToProps)(BuyerSignup));






// renderName(field) {
//     const { meta: { touched, error } } = field;
//     const className = `form-group ${touched && error ? "has-danger" : ""}`;

//     return (
//         <div className={className}>
//             <label>{field.label}</label>
//             <input className="form-control login-signup" type="text" {...field.input}/>
//             <div className="text-help">
//                 {touched ? error : ""}
//             </div>
//         </div>
//     );
// }


// renderEmail(field) {
//     const { meta: { touched, error } } = field;
//     const className = `form-group ${touched && error ? "has-danger" : ""}`;

//     return (
//         <div className={className}>
//             <label>{field.label}</label>
//             <input className="form-control login-signup" type="email" {...field.input}/>
//             <div className="text-help">
//                 {touched ? error : ""}
//             </div>
//         </div>
//     );
// }


// renderPassword(field) {
//     const { meta: { touched, error } } = field;
//     const className = `form-group ${touched && error ? "has-danger" : ""}`;

//     return (
//         <div className={className}>
//             <label>{field.label}</label>
//             <input className="form-control login-signup" type="password" {...field.input}/>
//             <div className="text-help">
//                 {touched ? error : ""}
//             </div>
//         </div>
//     );
// }

