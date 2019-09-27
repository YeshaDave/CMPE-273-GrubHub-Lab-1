import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
// import cookie from 'react-cookies';
import {Redirect} from 'react-router';
// import { connect } from "react-redux";
//import { Field, reduxForm } from "redux-form";
// import jwt_decode from 'jwt-decode';


class BuyerSignup extends Component {

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

    fNameChangeHandler = (e) => {
        this.setState({
            fName : e.target.value
        })
    }

    lNameChangeHandler = (e) => {
        this.setState({
            lName : e.target.value
        })
    }

    phoneChangeHandler = (e) => {
        this.setState({
            phone : e.target.value
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
            fName : this.state.fName,
            lName : this.state.lName,
            email : this.state.email,
            phone : this.state.phone,
            password : this.state.password
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
                        msg : 'Error in signup!'
                    })
                    console.log("in else")
                }
                else if(response.status === 202){
                    this.setState({
                        authFlag : false,
                        msg : 'Email exists!'
                    })
                    console.log("in else")
            }
    })
}


    render(){

        let redirectVar = null;
        if(this.state.authFlag){
            console.log(this.props.authFlag)
            redirectVar = <Redirect to = "/blogin" />
        }
        const { handleSubmit } = this.props;
        console.log(this.props.errormsg)

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
                                    <br/><p class="div-text">{this.state.msg}</p><br/>
                                    <div className="col-md-12">
                                    <span className="col-md-5">First Name:</span>
                                    <span className="col-md-2"></span>
                                    <span className="col-md-5">Last Name:</span>
                                    </div>
                                    <br/>
                                    <div>
                                    <div className="col-md-6">
                                    <input className="form-control login-signup" onChange={this.fNameChangeHandler} type="text" name="fName"/> </div>  
                                        {/* <Field label="First Name" name="firstname" component={this.renderName}/></div> */}
                                    <div className="col-md-6">
                                    <input className="form-control login-signup" onChange={this.lNameChangeHandler} type="text" name="lName"/>  </div>
                                        {/* <Field label="Last Name" name="lastname" component={this.renderName}/></div> */}
                                    <br/></div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Email<br/>
                                    <input type="email" name="email" onChange={this.emailChangeHandler} id="email"></input>
                                    {/* <Field label="Email" name="email" component={this.renderEmail}/> */}
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Phone<br/>
                                    <input type="text" name="phone" onChange={this.phoneChangeHandler} id="phone"></input>
                                    {/* <Field label="Email" name="email" component={this.renderEmail}/> */}
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <br/>
                                    Password (8 charactar minimum)<br/>
                                    <input type="password" name="password" onChange={this.passwordChangeHandler} id="password"></input>
                                    {/* <Field label="Password" name="password" component={this.renderPassword}/> */}
                                    </div>
                                    <div class="form-group" className="col-md-12">
                                    <span>
                                    <br/>
                                    <input type="checkbox" id="chkbox" name="chkbox"/> Keep me signed in</span><br/>
                                    <br/>
                                    <button class="btn btn-primary col-md-12 button" onClick={this.submitSignup}>Create your account</button>
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        or
                                    </div>
                                    <div class="div-text">
                                    <br/><br/>
                                        Have an account? <a href="/blogin">Sign in</a>
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




export default BuyerSignup;





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

