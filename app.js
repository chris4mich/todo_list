const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const items = [];
const workItems = [];


app.get("/", function(req, res){
  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItem: items});
  //
});

//
//
app.post("/", function(req, res) {
let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(workItems);
    res.redirect("/work");
  } else {
      items.push(item);
        res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItem: workItems});
});


app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

// server
app.listen(3000, function() {
  console.log("Server Started on Port 3000");
});




  //   var currentDay = today.getDay();
  //   var day = "";
  //   var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  //   var dayName = daylist[currentDay];
  //   //
  //   // if (currentDay === 6 || currentDay === 0) {
  //   //   day = "Weekend because it's " + dayName;
  //   //   dayName = "";
  //   // } else {
  //   //   day = "Weekday because it's " + dayName;
  //   //   dayName = "";
  //   // }
  //   switch (currentDay) {
  //     case 0:
  //       day = "Sunday";
  //       break;
  //     case 1:
  //       day = "Monday";
  //       break;
  //     case 2:
  //       day = "Tuesday";
  //       break;
  //     case 3:
  //       day = "Wednesday";
  //       break;
  //     case 4:
  //       day = "Thursday";
  //       break;
  //     case 5:
  //       day = "Friday";
  //       break;
  //     case 6:
  //       day = "Saturday";
  //       break;
  //     default:
  //     console.log("Error: Current Day is equel to: " + currentDay);
  //   }
  //
  //
