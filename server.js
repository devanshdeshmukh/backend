const express = require("express")
const connectToDB = require("./src/db/db")

const app = express()
app.use(express.json())

app.post('./notes',(req,res)=>{
    const {title,content} = req.body

    console.log(title,content)
})

connectToDB()
app.listen(3000, ()=>{
    console.log("server is  running on port 3000")
})
