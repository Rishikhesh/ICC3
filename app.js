const ejs = require("ejs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));



app.get("/", function(req, res){
  res.render("about");
});

app.get("/gallery", function(req, res){
  res.render("gallery");
});

app.get("/conferencehall", function(req, res){
  res.render("conferenceHall");
});

app.get("/conferenceLobby", function(req, res){
  res.render("conferenceLobby");
});

app.get("/networkCenter", function(req, res){
  res.render("networkCenter");
});

app.get("/information", function(req, res){
  res.render("infoCenter");
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port successfully");
});
