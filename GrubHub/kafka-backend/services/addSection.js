//var {Menu} = require('../Models/menu');
var { Sections } = require('../Models/sections')

function handle_request(msg, callback){
    var res = {};
    
    console.log("In handle request:"+ JSON.stringify(msg));

    var item = {
    //     "name": msg.item,
    //     "desc": msg.desc,
    //    // "image": req.body.image,
    //     "price": msg.price,
        "section": msg.section,
        "rName": msg.rName
    }

    
    var sections1 = new Sections({
      section : item.section,
      rName : item.rName
    })
//   item1.save().then((menu) => {
//       console.log("Adding to menu", menu)
//      //  callback(null, buyer)
//     })
    sections1.save().then((sections,err) => {
      if(err){
        callback(msg,"error")

      }
      else{
        console.log("Adding to section", sections)
        callback(msg,sections)
      }
        
    })
    
    callback(msg,"Success");
}




exports.handle_request = handle_request;