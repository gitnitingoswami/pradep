const mongoose = require('mongoose');


module.exports = async ()=>{
await mongoose.connect
("mongodb+srv://nitin:9b1AClgsdqIKsTuq@cluster0.ovnxb.mongodb.net/node-angular?retryWrites=true&w=majority",
{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>
console.log('connected db'))
.catch(()=>{
    console.log('faild');
});
mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
return mongoose
}
