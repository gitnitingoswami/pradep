var db = require('./dbopar');
var emplo =require("./emplo");
var express =require("express");
var bodyparser =require('body-parser');
var cors =require('cors');

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



router.route('/employee').get((req,res)=>{

    db.getemployee().then(resp=>{
        console.log("response");
        console.log(resp);
        res.json(resp[0]);
    })


})
router.route('/employee/:id').get((req,res)=>{

    db.getemployid(req.params.id).then(resp=>{
        console.log("response");
        console.log(resp);
        res.json(resp[0]);
    })


})


router.route('/addemp').post((req,res)=>{
let empl = {...req.body}
    db.addemp(empl).then(resp=>{
        console.log("response");
        console.log(resp);
        res.status(201).json(resp);
    });

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






