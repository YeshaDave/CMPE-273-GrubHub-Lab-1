var connection =  new require('./kafka/Connection');
//topics files
var Bsignup = require('./services/signin.js');
var Osignup = require('./services/osignin.js');
var Blogin = require('./services/blogin');
var Ologin = require('./services/ologin');
var EditBuyerName = require('./services/editBuyerName')
var EditBuyerEmail = require('./services/editBuyerEmail')
var EditBuyerPhone = require('./services/editBuyerPhone')
var EditOwnerName = require('./services/editOwnerName')
var EditOwnerEmail = require('./services/editOwnerEmail')
var EditOwnerPhone = require('./services/EditOwnerPhone')
var EditRestName = require('./services/editRestName')
var EditOwnerZip = require('./services/editOwnerZip')
var GetRestaurants = require('./services/getRestaurants')
var GetMenu = require('./services/getMenu')
var AddtoCart = require('./services/addtoCart')
var GetCart = require('./services/getCart')
var GetCart1 = require('./services/getCart1')
var GetOldOrders = require('./services/getOldOrders')
var PostMenu = require('./services/postMenu')
var GetSections = require('./services/getSections')
var AddSection = require('./services/addSection')
//var Books = require('./services/books.js');

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("buyer_signup",Bsignup)
handleTopicRequest("owner_signup",Osignup)
handleTopicRequest("buyer_login",Blogin)
handleTopicRequest("owner_login",Ologin)
handleTopicRequest("editBuyer_name",EditBuyerName)
handleTopicRequest("editBuyer_email",EditBuyerEmail)
handleTopicRequest("editBuyer_phone",EditBuyerPhone)
handleTopicRequest("editOwner_name",EditOwnerName)
handleTopicRequest("editOwner_email",EditOwnerEmail)
handleTopicRequest("editOwner_phone",EditOwnerPhone)
handleTopicRequest("edit_restName",EditRestName)
handleTopicRequest("editOwner_zip",EditOwnerZip)
handleTopicRequest("get_restaurants",GetRestaurants)
handleTopicRequest("get_menu",GetMenu)
handleTopicRequest("addto_cart",AddtoCart)
handleTopicRequest("get_cart",GetCart)
handleTopicRequest("get_cart1",GetCart1)
handleTopicRequest("get_old_orders",GetOldOrders)
handleTopicRequest("post_Menu",PostMenu)
handleTopicRequest("get_sections",GetSections)
handleTopicRequest("add_sections",AddSection)
