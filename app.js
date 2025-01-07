const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();
app.set('view engine', 'ejs');


app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

let newListItems = [];

app.get("/", (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-us", options, timeZone: "Asia/Kolkata");
    res.render("list", { KindOfDay: day, newListItems: newListItems });
});

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    newListItems.push(newItem);
    res.redirect('/');
});


app.listen(3000, () => {
    console.log("http://localhost:3000");
});
