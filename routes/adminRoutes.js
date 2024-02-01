const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const indexJS = require("../index.js");
const mongoose = require("mongoose");
const { url } = require("inspector");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const app  = express();

app.use(bodyParser.json());



// Admin Routes 


const adminSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String}
});

const coursesSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    imageLink: {type: String}
});

const adminTable = mongoose.model('adminCollection', adminSchema);
const courseTable = mongoose.model("courseCollection", coursesSchema);


router.post("/signup", async (request,result)=>{


    try
    {
        await adminTable.create({
            username: request.body.username, 
            password: request.body.password
        });

        result.send({
            message: "Admin created successfully"
        })
        
    }
    catch
    {
        result.send({
            message: "Admin Failed To sign up successfully."
        })   
    }

});

app.use(async (request,result, next)=>
{       
       await adminTable.findOne(
        {
            username: request.headers.username, 
            password: request.headers.password    
        }, (err,user) =>
        {
            if (err) 
            {
               
            }
            
            if (user) {
            result.send(
            {
            msg: "Admin not found"
            })} 
            else{
                
            next();
            }
        }
        );

});


router.post("/courses", async (request,result)=>{



 

    await courseTable.create({
         title: request.body.title,
         description: request.body.description,
         price: request.body.price, 
         imageLink: request.body.imageLink
    });

    result.send({
        message: "Course Created Successfully"
    });



});


router.get("/courses", (request,result)=>
{

});



module.exports = router;


