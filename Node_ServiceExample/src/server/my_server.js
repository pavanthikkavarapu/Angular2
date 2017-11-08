//import express module
var express = require("express");
//import mysql module
var mysql = require("mysql");
//create server
var app = express();

//cross origin issue resolve.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//create the public folder to access resources
app.use(express.static(__dirname+"/../Node_ServiceExample"));
//create connection object.
var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"demo"
});
//connect to database.
connection.connect();
//Rest API.
app.get("/mysql",function(req,res){
    connection.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});

//import mongodb
var mongodb = require("mongodb");
//create the MongoClient
var nareshIT = mongodb.MongoClient;
//create the Rest API.
app.get("/mongodb",function(req,res){
    nareshIT.connect("mongodb://localhost:27017/node",function(err,db){
        db.collection("product1").find().toArray(function(err,array){
            res.send(array);
        });
    });
});




//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080")

