const express = require('express');

const app = express();

require('dotenv').config()
const mongoose = require("mongoose")

const Fruit = require("./models/fruits")

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Connected to DATABSE")})
.catch(()=>{console.log("ERROR CONNECTING TO DB OMAR")})



app.get("/fruits", async(req,res)=>{
    const allFruits = await Fruit.find()
    console.log(allFruits)
    res.render("all-fruits.ejs",{allFruits:allFruits})

})

app.get("/fruits/new", async (req,res)=>{

  res.render("new.ejs")
  
  
  })

  
app.get("/fruits/:id", async (req,res)=>{
  console.log(req.params.id)
  const foundFruit = await Fruit.findById(req.params.id)
  console.log(foundFruit)
  res.render("show.ejs",{foundFruit:foundFruit})
})



app.listen(3000, () => {
  console.log('Listening on port 3000');
});
