import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class updateItems extends Component {


    constructor(){
        super();
        this.addSection = this.addSection.bind(this);
        this.updateSection = this.updateSection.bind(this)
        this.state = {  
            sections : [],
            isComponent: "",
            msg : null,
            flag : false,
            section : "",
            msg : "",
            sectionName : ""
        }
    }  


    // pictureChangeHandler = (e) => {
    //     this.setState({
    //         profilePicture : e.currentTarget.id
    //     })
    // }

    // profileChangeHandler = (e) => {
    //     this.setState({
    //         profile : e.currentTarget.id
    //     })
    // }

    // phoneChangeHandler = (e) => {
    //     this.setState({
    //         phone : e.currentTarget.id
    //     })
    // }

    submitSection = (e) => {
        e.preventDefault();
        console.log("inside submit section")
        console.log(this.state.section)
        const data = {
            section : this.state.section,
           // rName : sessionStorage.getItem('rName')
        }
        console.log(data)
        axios.post('http://localhost:3001/addSection',data)
                .then((response) => {
                    console.log("Status Code : ",response.status);
                    if(response.status === 201){
                        this.setState({
                            flag : true
                        })
                    }else{
                        this.setState({
                            flag : false,
                            msg : 'Section already exists!'
                        })
                    }
    })
}


    deleteSection = (e) => {
        console.log("inside delete section")
        this.setState({
            sectionName : document.getElementsByName("sectionName").value
        })
        console.log(this.state.sectionName)
        const data = {
            sectionName : this.state.sectionName
        }
        console.log(data)
    }



    addSection() {
        this.setState({isComponent: "add"});
    }

    updateSection() {
        console.log("update called")
        this.setState({
            isComponent: "update",

        });
    }

    sectionChangeHandler = (e) => {
        this.setState({
            section : e.target.value
        })
      }

      sectionChangeHandler1 = (e) => {
        this.setState({
            sectionName : e.target.value
        })
        console.log(this.state.sectionName)
      }

    

    componentDidMount(){
        axios.post('http://localhost:3001/getSections')
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
        console.log("Inside home.js")
        console.log("inside create.js")
        console.log("msg",this.state.msg)
        if(this.state.flag == true){
            console.log("redirect1")
            redirectVar = <Redirect to= "/updateItems"/>
        }
        else{
            console.log("redirect2")
            redirectVar = <Redirect to= "/updateItems"></Redirect>
        }
        const isComponent = this.state.isComponent;
        let Contents = null;
        console.log(isComponent)

        if(isComponent == "add"){    
            Contents = (
                <div>
                    Section Name <input type="text" onChange={this.sectionChangeHandler} name="section"></input><button onClick={this.submitSection}>Submit</button> <button>Cancel</button>
                </div>);
        }

       else if(isComponent == "update"){    
            Contents = (
                <div>
                    Section Name <input type="text"></input><button onClick={this.rename}>Submit</button> <button>Cancel</button>
                </div>);
        }

        
        let Sections = this.state.sections.map(sections => {
            if(sections != null)
            return(
                
            <tr>
                <td><input type="text" class="section-input" name="sectionName" value={sections.section}></input></td>
                <td><button onClick={this.updateSection}>Rename</button></td>
                <td><button onClick={this.deleteSection}>Delete</button></td>
            </tr>
                    // <div class="div-menu1"><img class="img-menu" src={img} /><button>{menu.price}</button></div>
               
            )
        })

        return(
            <div> 
                {redirectVar}
                
                <h3>Update Sections</h3> <br/>
                <div class="col-md-4"></div> 
                <div class="col-md-4">
                    <div>
                    <table class="table">
                            <thead>
                                <tr>
                                    <th>Section</th>
                                    <p>{this.state.msg}</p>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Sections}
                                <tr>
                                    <td><button onClick={this.addSection}>Add Section</button></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                    </table>
                    </div>
                    <div>{Contents}</div>
                </div>
                <div class="col-md-4"></div>     
            </div>
        )
    }
}

export default updateItems;



