var express =require("express");
var bodyparser =require('body-parser');
var cors =require('cors');
const mongoose = require('mongoose');
mongoose.connect
("mongodb+srv://nitin:9b1AClgsdqIKsTuq@cluster0.ovnxb.mongodb.net/node-angular?retryWrites=true&w=majority",
{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>
console.log('connected'))
.catch(()=>{
    console.log('faild');
});
mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
 var schema = new mongoose.Schema({
    name:String,
    Email:String,
    number:Number,
    Password:String,
    Gender:String, 
 });
 var user = mongoose.model('emp',schema);

var app = express();
var router = express.Router();


app.use(bodyparser.urlencoded({
    extended:true,

}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api',router);

router.route((req,res,next)=>{
    console.log("model");
    next();
});
post=[
    {
      name:'nitin',
      Email:'example@com',
      number:894504444,
      Password:'lkasjflkasjflkj',
      Gender:'MALE',
    }
    
     ];
router.route('/forms').get((req,res)=>{
user.find({},function(err,doc){
    if(err) console.warn(err)
    else res.json({
        
        data:doc
    })
}
)
console.log("activae");


})
router.route('/employee/:id').get((req,res)=>{

    db.getemployid(req.params.id).then(resp=>{
        console.log("response");
        console.log(resp);
        res.json(resp[0]);
    })


})


router.route('/addforms').post((req,res)=>{
    /*
let empl = {...req.body}
    db.addemp(empl).then(resp=>{
        console.log("response");
        console.log(resp);
        res.status(201).json(resp);
    });*/
  new user({
    name:req.body.name,
    Email:req.body.Email,
    number:req.body.number,
    Password:req.body.Password,
    Gender:req.body.Gender,

  }).save()
 
    
    res.json({
        message:'sucess',
    })
   

})
router.route('/update').post((req,res)=>{
    let empl = {...req.body}
        db.update(empl).then(resp=>{
            console.log("response");
            console.log(resp);
            res.status(201).json(resp);
        });
    
    })








var port = process.env.PORT || 5000;
app.listen(port);
console.log("order api is running" + port);
