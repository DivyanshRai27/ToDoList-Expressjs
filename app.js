// jshint esvesion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var today = new Date();

  var options = {
     weekday: 'long',
    month: 'long',
    day: 'numeric'
  }

  let day = today.toLocaleDateString("en-us", options);

  res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
  var item = req.body.newItem;
  //console.log(item);
  items.push(item);
  res.redirect("/");
});

app.listen(4000,function(){
  console.log("My server 4000 is ready to use");
});
