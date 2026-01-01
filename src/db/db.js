const mongoose = require("mongoose")

function connectToDB(){

    mongoose.connect("mongodb+srv://devanshdeshmukh:geD5h2O8x0y82zIu@cluster0.5jzxzz5.mongodb.net/demo")
    .then (()=>{
        console.log("Connected to DB")
    })
} 
module.exports = connectToDB;