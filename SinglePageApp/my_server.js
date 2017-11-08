var express = require("express");
var mysql = require("mysql");

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"demo"
});

connection.connect();

app.get("/mysql",function(req,res){
    connection.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});

app.listen(8080);
console.log("Server Listening Port No.8080");