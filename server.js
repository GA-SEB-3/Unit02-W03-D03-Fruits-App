const express = require('express');

const app = express();

require('dotenv').config()
const mongoose = require("mongoose")

const Fruit = require("./models/fruits")

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Connected to DATABSE")})
.catch(()=>{console.log("ERROR CONNECTING TO DB OMAR")})

app.get('/sara',async (req,res)=>{
    let myStudent = "Adel"
    let myTeacher = "Ruqaya"
    res.render("homepage.ejs",{myStudent:myStudent, myTeacher:myTeacher})
})


app.get("/fruits", async(req,res)=>{
    const allFruits = await Fruit.find()
    console.log(allFruits)
    res.render("all-fruits.ejs",{allFruits:allFruits})

})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
