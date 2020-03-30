var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(https://asment2.herokuapp.com/);

app.get("/",function(req,res){
	res.render("home");
})