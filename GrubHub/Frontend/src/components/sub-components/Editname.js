import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import jwt_decode from 'jwt-decode';
import '../../App.css';

class Editname extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
       }
       }

    renderFieldText(field) {
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

    render() {
        return(
            <div>
                <form>
                <h4 class="font-bold">Edit Name</h4><br/>
                <h6 class="font-bold">First Name</h6><br/>
                <Field label="First Name" name="firstname" component={this.renderFieldText}/><br/>
                <h6 class="font-bold">Last Name</h6><br/>
                <Field label="Last Name" name="lastname" component={this.renderFieldText}/><br/>
                <button type="submit">Update Name</button>
                <button>Cancel</button>
                </form>
            </div>
        )
    }
}

export default Editname;