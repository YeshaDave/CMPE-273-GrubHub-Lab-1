import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';


class addItemform extends Component {

    constructor(){
        super();
        this.submitSection = this.submitSection.bind(this);
       // this.updateSection = this.updateSection.bind(this)
        this.state = {  
            section : "",
            item: "",
            desc : "",
            price : "",
            sections : [],
            flag: false
        }
    }  


    sectionChangeHandler = (e) => {
        this.setState({
            section: e.target.value
        })
    }

    itemChangeHandler = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    descChangeHandler = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    priceChangeHandler = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    imageChangeHandler = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    submitSection = (e) => {
        //e.preventDefault();
        console.log("inside submit section")
        console.log(this.state.section)
        const data = {
            section: this.state.section,
            item: this.state.item,
            desc: this.state.desc,
            price: this.state.price,
            rName : sessionStorage.getItem('restaurantName')
        }
        console.log(data)
        axios.post('http://54.183.178.69:3001/postMenu', data)
            .then((response) => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        flag: true
                    })
                } else{
                    this.setState({
                        flag: false,
                        msg: 'Item already exists!'
                    })
                }
            })
    }


    // onImageHandle(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = (e) => {
    //             this.setState({ profilePhoto: e.target.result });
    //         };
    //         reader.readAsDataURL(event.target.files[0]);
    //         this.setState({
    //             imageURL: event.target.files[0]
    //         })
    //     }
    // }


    // imageUpload = (e) => {
    //     e.preventDefault();
    //     const image = new FormData();
    //     image.append("profilePhoto", this.state.imageURL);
    //     console.log(image);
    //     axios.defaults.withCredentials = true;
    //     axios.put('http://54.183.178.69.85:3001/recruiter/profile/imageupload', image,
    //         {
    //             params: {
    //                 email: localStorage.getItem('email'),
    //             }
    //         })
    //         .then((response) => {
    //             console.log(response)
    //             //update the state with the response data
    //             this.setState({
    //                 ImageMessage: response.data.message,

    //             })
    //         }).catch(error => {
    //             console.log("else")
    //             this.setState({
    //                 ImageMessage: error.response.data.error
    //             })
    //         });
    // }
    componentDidMount(){
        axios.post('http://54.183.178.69:3001/getSections')
                .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                this.setState({
                    sections : this.state.sections.concat(response.data) 
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }




    render() {
        let redirectVar = null;
        console.log("inside add item", this.state.flag)
        if(this.state.flag == true){
            redirectVar = <Redirect to= "/MenuList"/> 
        }
        return (
            <div>
                {redirectVar}
                <div className="col-md-12" style={{ marginTop: "20px" }}>
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Section Name<br /><input type="text" name="section" onChange={this.sectionChangeHandler}></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Item Name <br /><input type="text" name="item" onChange={this.itemChangeHandler}></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Description<br /><input type="text" name="desc" onChange={this.descChangeHandler} ></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        {/* <img id="img" alt="Avatar" src={this.state.profilePhoto} style={{ width: "200px", height: "200px", borderRadius: "50%" }}></img> */}
                        Image<br /><input type="file" style={{ textAlign: "center", margin: "auto" }} onChange={this.onImageHandle} name="pic" accept="image/jpg, image/jpeg" /><br />
                        <input class="btn btn-primary " type="submit" value="Upload" onClick={this.imageUpload} />
                    </div>
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        Price<br /><input type="text" name="section" onChange={this.priceChangeHandler}></input>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center" }}>
                    <button onClick={this.submitSection}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default addItemform;