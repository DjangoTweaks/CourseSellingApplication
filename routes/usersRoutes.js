const express = require("express");
const router = express.Router();

//user routes

router.post("/signup", (request,result)=>{
   
});

router.get("/courses", (request,result)=>{
    result.send({
        msg: "user courses"
    });
});

router.post("/courses/:courseId", (request,result)=>
{

});

router.get("/purchasesCourses", (request,result)=>
{

});

module.exports = router;