const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,client)=>{
  if(err){
    return console.log("error while connecting");
  }
  console.log("DB connected");
  const db = client.db('test');
  db.collection('Todos').find({id:103}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  });
});
