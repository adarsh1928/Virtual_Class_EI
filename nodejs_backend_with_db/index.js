const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const database = require("./config/Database");
const Classroom = require('./models/Classroom');

dotenv.config();


mongoose.Promise = global.Promise;

database.connect();

// Demo kind of function below , Implementation of other features are in controller section

const addClassroom = (className) => {
  Classroom.findOne({ ClassName: className }).then((existingClass) => {
    if (existingClass) {
      console.error(`Classroom ${className} already exists`);
    } else {
      // Classroom does not exist, so create it
      Classroom.create({ ClassName: className }).then((newClassroom) => {
        console.info(`New Classroom ${newClassroom.ClassName} Added`);
      }).catch((error) => {
        console.error('Error creating classroom:', error);
      });
    }
  }).catch((error) => {
    console.error('Error checking for existing classroom:', error);
  });
}
module.exports = {
  addClassroom
};


