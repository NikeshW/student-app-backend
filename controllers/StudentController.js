const express = require("express");

const controller = express.Router();

const studentData = require("../data/studentData.json");

// get all students
controller.get("/", (req, res) => {
  res.json(studentData);
});

// get students by id
controller.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const studentId = Number(id);

    console.log(studentId); // NaN

    if (isNaN(studentId)) {
      //typeof studentId !== "number") {
      throw "id must be a number";
    }
    // if (!/[0-9]/.test(studentId)) {
    //   throw "id must be a number";
    // }
    else {
      const studentById = studentData.students.find(
        (student) => Number(student.id) === studentId
      );

      res.json(studentById);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = controller;
