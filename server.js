var express=require('express');
var app=express();
var mongojs = require('mongojs');
var Client=require('mongodb').MongoClient;
var bodyParser=require('body-parser');
var db=mongojs('contactlist',['contactlist']);
var db2=mongojs('alarm',['alarm'])
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

Client.connect('mongodb://localhost:27017/contactlist', function(error, db){
    if(error) {
        console.log(error);
    } else {
        console.log("connected:"+db);


     app.get('/alarm',function(req,res){
          console.log('i recieved a get alarm req');
          db2.collection("alarm").find().toArray(function(err,docs){
               console.log(docs);
               res.json(docs);
          });
     });

     app.post('/alarm',function(req,res){
          console.log(req.body);
          db2.collection("alarm").insert(req.body,function(err,docs){
               if(err){
                    console.log ("error");
               } else{
                    console.log(docs);
                    res.json(docs);
               }
          });
     });

     app.get('/contactlist',function(req,res){
        console.log('i recieved a get req');
          db.collection("vehicle").find().toArray(function(err,docs){
               console.log(docs);
               res.json(docs);
          });
     });

     app.post('/contactlist',function(req,res){
          console.log(req.body);
          db.collection("vehicle").insert(req.body,function(err,docs){
               if(err){
                    console.log ("error");
               } else{
                    console.log(docs);
                    res.json(docs);
               }
          });
     });


     app.delete('/contactlist/:id',function(req,res){
          var id=req.params.id;
          console.log(id);
          console.log(mongojs.ObjectId(id));
         // console.log(db.contactlist)
          db.collection("vehicle").remove({_id:mongojs.ObjectId(id)},function(err,docs){
         // db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){
          res.json(docs);
          });
     });


     app.get('/contactlist/:id',function(req,res){
          var id=req.params.id;
          console.log(id);
          db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
               res.json(docs);
          });
     });
     app.put('/contactlist/:id',function(req,res){
          var id=req.params.id;
          console.log(req.body.name);
          db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
               update:{$set:{name:req.body.name,email:req.body.email,phone:req.body.phone}},
               new:true},function(err,doc){
                    res.json(doc);
               });

     });

    }
});

app.listen(3000);
console.log("server up");