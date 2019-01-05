const  MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test',(err,client)=>{

    if(err){
      return console.log("Error while connecting to DB");
    }
    console.log("connected to DB");
    const db = client.db('test');

    db.collection('Todos').insertOne({
      id:103,
      name:'Saptarshi2',
      age:29
    },(err, result)=>{
      if(err){
          return console.log("Unable to insert");
      }
      console.log(JSON.stringify(result.ops));
    });
    client.close();
});
