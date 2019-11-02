var express=require('express');
var app=express();
var mongojs=require('mongojs');
var bodyParser=require('body-parser');
var db=mongojs('contactlist',['contactlist']);
var db2=mongojs('contactlist',['name'])
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/contactlist',function(req,res){
	console.log('i recieved a get req');
     db.contactlist.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.get('/contactlist/user',function(req,res){
     console.log('i recieved a get req');
     db2.songminjae.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.get('/contactlist/relig',function(req,res){
     console.log('i recieved a get req');
     db2.religious.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.get('/contactlist/toe',function(req,res){
     console.log('i recieved a get req');
     db2.toeic.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.get('/contactlist/poe',function(req,res){
     console.log('i recieved a get req');
     db2.poet.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});


app.get('/contactlist/ar',function(req,res){
     console.log('i recieved a get req');
     db2.art.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.get('/contactlist/ki',function(req,res){
     console.log('i recieved a get req');
     db2.kids.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.get('/contactlist/ess',function(req,res){
     console.log('i recieved a get req');
     db2.essay.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });

});

app.post('/contactlist',function(req,res){
     console.log(req.body);
     db.contactlist.insert(req.body,function(err,docs){
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

app.get('/contactlist/:id',function(req,res){
     var id=req.params.id;
     console.log(id);
     db2.songminjae.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
          res.json(docs);
     });
});



app.delete('/contactlist/:id',function(req,res){
     var id=req.params.id;
     console.log(id);
     db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){
               res.json(docs)
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


app.listen(3000);
console.log("server up");
