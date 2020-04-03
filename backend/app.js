const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/usersc");
const Ybb = require("./models/youtube");
const Courses = require("./models/course");
const Blogs = require("./models/blogg");
const Review = require("./models/review");

const app = express();

//online storage
// mongodb+srv://muskanbb:muskan123@cluster0-s8nnp.mongodb.net/edustop?retryWrites=true&w=majority
// for local storage
// mongodb://127.0.0.1:27017/edustop

mongoose
  .connect("mongodb://127.0.0.1:27017/edustop")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/new-usersc", (req, res, next) => {
  const post = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password

  });
  post.save();
  res.status(201).json({
    message: "User added successfully ! "
  });
});

app.post("/api/course", (req, res, next) => {
  const post = new Courses({
      name: req.body.name,
    title: req.body.title,
    desc: req.body.desc,
    link: req.body.link
  });
  post.save();
  res.status(201).json({
    message: "Courses added successfully"
  });
});

app.post("/api/blogg", (req, res, next) => {
  const post = new Blogs({
      name: req.body.name,
    title: req.body.title,
    description: req.body.desc,
    links: req.body.link
  });
  post.save();
  res.status(201).json({
    message: "Blogs added successfully"
  });
});

app.post("/api/usersc", (req, res, next) => {
  User.findOne({emailId: req.body.emailId}).then(documents =>
    {
    if(documents)
    {
      if(documents.password== req.body.password)
      {
        res.status(200).json({
          message:1
        });
      }
      else{
        res.status(200).json({
          message:0
        });

      }
    }
    else{
      res.status(200).json(
        {
          message:0
        })
    }

  });
});


app.get("/api/course/:name", (req, res, next) => {
  Courses.find({name:req.params.name}).then(documents =>
    {
    res.status(200).json(
        {
          message:"Courses Fetched ! ",
          crs: documents
        });
  });
});

app.get("/api/blogg/:name", (req, res, next) => {
  Blogs.find({name:req.params.name}).then(documents =>
    {
      res.status(200).json({
        message:"Blogs Fetched ! ",
        blg:documents
      });

  });
});

app.get("/api/youtube/:name", (req, res, next) => {
  Ybb.find({name:req.params.name}).then(documents =>
    {
      res.status(200).json({
        message:"Youtube videos fetched ! ",
        yb:documents
      });
  });
});


app.post("/api/review", (req, res, next) => {
  const post = new Review({
      name: req.body.name,
    emailid: req.body.emailid,
    message: req.body.message,

  });
  post.save();
  res.status(201).json({
    message: "message submitted successfully"
  });
});


app.get("/api/review",(req, res , next) => {
  Review.find().then(documents => {
    res.status(200).json({
      message: "Messages fetched",
      rev: documents
    });
  });
});


module.exports =app;
