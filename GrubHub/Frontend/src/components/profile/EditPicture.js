import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import { Redirect } from 'react-router';
//import { connect } from "react-redux";
//import { Field, reduxForm } from "redux-form";
//import jwt_decode from 'jwt-decode';
import '../../App.css';

class EditPicture extends Component {

    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = {isComponent: ""};
      }

    handleEditClick() {
        this.setState({isComponent: "edit"});
    }

    handleDeleteClick() {
        this.setState({isComponent: "delete"});
    }

    submitImage = () => {
        var Image = (
            <div>
                <img src=""></img>
            </div>
        )
      return Image
    }

    render() {

        const isComponent = this.state.isComponent;

        let Contents;

        if(isComponent == "edit"){
            Contents = (
                <div>
                    <h5>Picture</h5><br/>
                    <input type="file" name="pic" accept="image/*"></input>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            )
        }

        else if(isComponent == "delete"){
            Contents = (
                <div>
                    <h5>Are you sure?</h5>
                    <button>Delete</button>
                    <button>Cancel</button>
                </div>
            )
        }


        return(
            <div>
                <div><h4 class="font-bold">Picture</h4><br/>
                    {Image}
                    <button onClick={this.handleEditClick}>Edit</button>
                    {/* <button onClick={this.handleDeleteClick}>Delete</button> */}
                </div>
                <div>
                    {Contents}
                </div>
            </div>
        )
    }
}

export default EditPicture;





// renderFieldEmail(field) {
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

// renderFieldPassword(field) {
//     const { meta: { touched, error } } = field;
//     const className = `form-group ${touched && error ? "has-danger" : ""}`;

//     return (
//         <div className={className}>
//             <label>{field.label}</label>
//             <input className="form-control login-signup" type="password" {...field.input}   style={{backgroundColor:"#75BDA1",opacity:"1", height:"50px", borderColor:"#40896D", }}/>
//             <div className="text-help">
//                 {touched ? error : ""}
//             </div>
//         </div>
//     );
// }