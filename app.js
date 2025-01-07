const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let newListItems = [];

app.get("/",(req,res)=>{

    let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    let today = new Date();
    let day = today.toLocaleDateString("en-us",options);
    res.render("list",{KindOfDay: day, newListItems: newListItems});
})

app.post("/",(req,res)=>{
    let newItem = req.body.newItem;
    newListItems.push(newItem);
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})