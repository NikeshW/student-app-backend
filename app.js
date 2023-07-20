const express = require("express");

const app = express();

const studentController = require('./controllers/StudentController')

app.use('/students', studentController)

// handle a get request
app.get("/", (request, response) => {
  response.send("Hello world");
});


// handle a get request at '/test that responds with object
// response is an object and json is the method
app.get("/test", (request, response) => {
  response.json({
    test: "success",
    time: "1pm",
  });
});

module.exports = app;
