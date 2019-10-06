import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class menuItems extends Component{

    constructor(){
        super();
        this.state = {  
            menu : [],
            sections : []
        }
    }  

    componentDidMount(){
        axios.post('http://localhost:3001/getMenu')
                .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount")
                this.setState({
                    menu : this.state.menu.concat(response.data) 
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });


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

    render(){

    //     let Sections = this.state.sections.map(sections => {
    //         var section1 = sections.section
    //         console.log(section1)

    //         //Menu.filter(function(menu){
    //             if(menu != null && section1 === menu.section){
    //                 return(
    //                     <div>
    //                         <tr>
    //                         <td>{menu.name}</td>
    //                         <td>{menu.desc}</td>
    //                         <td>{menu.section}</td>
    //                         </tr>
    //                     </div>
    //                 )
    //             }
    //         })

    //  //   })



        return(
            <div>
                <tr class="row-border">
                    <td>Name</td>
                    <td>Desc</td>
                    <td>Desc</td>
                </tr>
                <tr>
                  {/* {Sections} */}
                </tr>
            </div>
        )
    }
}

export default menuItems;