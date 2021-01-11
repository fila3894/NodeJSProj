const express = require('express');
const app = express();


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
});

app.get("/la1", (req,res) =>{
  res.sendFile(__dirname + "/food_la1.html");
});

app.get("/ko1", (req,res) =>{
  res.sendFile(__dirname + "/food_ko1.html");
});


app.get("/ch1", (req,res) =>{
  res.sendFile(__dirname + "/food_ch1.html");
});

app.get("/ja1", (req,res) =>{
  res.sendFile(__dirname + "/food_ja1.html");
});

app.get("/i1", (req,res) =>{
  res.sendFile(__dirname + "/food_i1.html");
});



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


