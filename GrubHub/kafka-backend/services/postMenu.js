var {Menu} = require('../Models/menu');
var { Sections } = require('../Models/sections')

function handle_request(msg, callback){
    var res = {};
    
    console.log("In handle request:"+ JSON.stringify(msg));

    var item = {
        "name": msg.item,
        "desc": msg.desc,
       // "image": req.body.image,
        "price": msg.price,
        "section": msg.section,
        "rName": msg.rName
    }

    Menu.findOne({$and :[
        {rName : item.rName,
        name : item.name}]}, function (err, results) {
            //results = 1
      console.log(results)
if(results!=null){
  //console.log(results)
  callback(msg,"Error");
  }
else {
    var item1 = new Menu({
      name : item.name,
      desc : item.desc,
      price : item.price,
      section : item.section,
      rName : item.rName
   })
    var sections1 = new Sections({
      section : item.section,
      rName : item.rName
    })
  item1.save().then((menu) => {
      console.log("Adding to menu", menu)
     //  callback(null, buyer)
    })
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
})

}

exports.handle_request = handle_request;