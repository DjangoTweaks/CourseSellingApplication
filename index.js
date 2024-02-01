const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/usersRoutes');
const adminRoutes = require('./routes/adminRoutes');
const app = express(); 
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

mongoose.connect("mongodb+srv://akshat123:Akshat12345@cluster0.9frcojs.mongodb.net/CourseSellingApp");


const userSchema = mongoose.Schema(
    {
        phoneNumber: {type: Number}
    }
);





app.listen(3000);

