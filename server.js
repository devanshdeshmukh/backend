const express = require('express');

const app = express(); //server create ho jata hai

app.use(express.json()) //this this the midlewere

// notes => title and decription
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/notes',(req,res)=>{
    const {title,content} = req.body
    console.log(title,content)
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})