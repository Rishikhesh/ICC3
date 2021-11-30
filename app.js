const ejs = require("ejs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));



app.get("/", function(req, res){
  res.render("about");
});

app.get("/conferencehall", function(req, res){
  res.render("conferenceHall");
});

app.get("/eventSponsor", function(req, res){
  res.render("eventSponsor");
});

app.get("/chat", function(req, res){
  res.render("networkCenter");
});

app.get("/information", function(req, res){
  res.render("infoCenter");
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port successfully");
});
