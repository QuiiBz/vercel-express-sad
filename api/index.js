const express = require("express");

const app = express();
app.use(express.json());

app.post("/greet", (req, res) => { 
    res.send(req.body); 
}); 

module.exports = app;
