const express = require("express");
const app = express();
const port = 3000;

// Ex. 1
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Ex. 2
app.get("/cats", (req, res) => {
    res.send("Meow.");
});

app.get("/dogs", (req, res) => {
    res.send("Woof.");
});

app.get("/cats_and_dogs", (req, res) => {
    res.send("Living together.");
});

// Ex. 3
app.get("/greet/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

// Ex. 4
app.get("/year", (req, res) => {
    let userAge = parseInt(req.query.age);
    // let dateObj = new Date();
    let birthYear = 2021 - userAge;
    res.send(`You were born in ${birthYear}.`);
});

// Ex. 5
// See "tuesday-music.js"

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});