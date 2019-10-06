import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import cookie from 'react-cookies';
//import {Redirect} from 'react-router';
//import {Route} from 'react-router-dom';

class upcomingOrders extends Component{

    constructor(){
        super();
        this.state = {  
            oldOrders : [],
        }
        // this.handleChange = this.handleChange.bind(this);
    }  

    componentDidMount(){
        axios.post('http://localhost:3001/getOldOrders')
                .then((response) => {
                //update the state with the response data
                console.log("inside componentDidMount of Upcoming orders")
                console.log(response)
                this.setState({
                    oldOrders : this.state.oldOrders.concat(response.data)
                });
                //this.state =  { authFlag2: cookie.load('cookie') }
                //console.log(this.state.authFlag2);
            });
    }



    render(){

       

        // let Item1 = for(let i=0; i< arr.length; i++){
        //     return(
        //         <li>
        //          arr[i]
        //         </li>
        //     )
        // }
        let OldOrders = this.state.oldOrders.map(oldOrders => {
            
            //var img = menu.imageUrl
           // var num=this.state.num;
           var item = oldOrders.items
           console.log("string",item)
           var arr = item.split(",")
           console.log("arr",arr)
           if(oldOrders != null) 
            return(
                
                <div class="container-fluid orders">
                <div class="orders-card"></div>
                <div>
                <div class="col-md-3 inner-order">
                <ul>
                <li class="list font"><h3>{oldOrders.name}</h3></li>
                <li class="list font1">{oldOrders.address}</li>
                <li class="list font1">Total: ${oldOrders.total}</li>
                </ul>
                </div>
                <div class="col-md-6 inner-order">
                
                </div>
                </div>
                </div>
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
                <h5 class="font-bold" id="profilePicture" ><div onClick={this.handlePictureClick}>Profile Picture</div></h5><br/>
                <h5 class="font-bold" id="profile" ><div><a href="/bprofile">Profile</a></div></h5><br/>
                <h5 class="font-bold" id="phone" ><div><a href="/phone">Phone</a></div></h5><br/>
                <h5 class="font-bold" id="pOrders" ><div><a href="/upcomingOrders">Past Orders</a></div></h5><br/>
                <h5 class="font-bold" id="uOrders" ><div><a href="/pastOrders">Upcoming Orders</a></div></h5><br/>
                <h5>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </h5>
                </div>
                <div>
                   
                </div>

                <div>

                </div>  
                

                <div class="col-md-9 profile-div">
                {OldOrders}
                </div>
            </div>
        )
    }
}

export default upcomingOrders;