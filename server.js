const express = require('express');

const app = express();

require('dotenv').config()

app.get('/',async (req,res)=>{
    let myStudent = "Adel"
    let myTeacher = "Ruqaya"
    res.render("homepage.ejs",{myStudent:myStudent, myTeacher:myTeacher})
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
