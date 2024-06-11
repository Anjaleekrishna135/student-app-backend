const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { studentmodel }=require("./models/student")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://anjaleekrishnaps2001:anjalee2001@cluster0.cnbaf.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let student=new studentmodel(input)
    student.save()
    console.log(student)
    res.json({"status":"success"})
})

app.listen(8080, () => {
    console.log("server started")

})
app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page")
})




