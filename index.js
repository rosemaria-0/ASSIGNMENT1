// Import express
const express = require("express");

//create an app object
const app = express();

//config app object
app.get("/",(req,res,next)=>{
    res.send("Hello JS Frameworks!");
})
// add a get handler

//make app listen to a port
app.listen(3000);

console.log("App is running on http://localhost:3000");