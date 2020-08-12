// require the Express module
const express = require("express");
// creates an instance of an Express server const app = express();
// define the port  
const port = 3000;
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));

// respond with "Hello Class!" at URI: /students
app.get("/students", (req, res) => {
    res.json("Getting all students.."); });
   // accept POST request at URI: /students
 app.post("/students", (req, res) => { res.json("Adding a student..");
 });
 // accept PUT request at URI: /students
 app.put("/students", (req, res) => { res.json("Updating a student..");
 });
 // accept DELETE request at URI: /students
 app.delete("/students", (req, res) => { res.json("Deleting a student..");
 });