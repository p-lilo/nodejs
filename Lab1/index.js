// import { express } from "express";
const express = require("express");

// create express app
const app = express();

// define routes

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to home page",
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "Welcome to about page",
  });
});

//start the server

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
