import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class menuList extends Component {


    constructor(){
        super();
        this.state = {  
            menu : [],
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
    }

    render() {
       
        let Menu = this.state.menu.map(menu => {
            if(menu != null)
            var img = menu.imageUrl
           // var img = "./pizza.gif"
           //var img = "https://recipes.timesofindia.com/thumb/53110049.cms?imgsize=148092&width=800&height=800"
           //console.log(img)
            return(
                
                    <div class="div-menu outer-box1"><h5>
                    <div class="div-menu1">{menu.name}</div></h5>
                   
                    <div class="container1">
                    <img src={img} class="img-div"/>
                    <button class="btn" class="button-div">${menu.price}+</button>
                    </div>
                   
                    </div>
                    // <div class="div-menu1"><img class="img-menu" src={img} /><button>{menu.price}</button></div>
               
            )
        })

        return(
            <div >
                <div>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-3 profile-div">
                <h3 class="font-bold">Your Account</h3><br/>
                <h5 class="font-bold" id="profile" ><div><a href="/oprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/MenuList">Menu</a></div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div><a href="/oPastOrders">Past Orders</a></div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div><a href="/oUpcomingOrders">Upcoming Orders</a></div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                <div>
                   
                </div>

                <div>

                </div>  
                
            <div class="col-md-9 profile-div"> 
                <h1>Menu</h1> <br/>
                <div class="col-md-6"></div> 
                <div class="col-md-2"><a href="/updateItems"><h4>Update Sections</h4></a> </div>
                <div class="col-md-4">
                <h4><a>Update Items</a></h4> </div>     
                {Menu}
            </div>
            </div>
        )
    }
}

export default menuList;



