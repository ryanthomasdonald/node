const express = require("express");

const app = express(); // returns an "express" object
const port = 3000;

// get, post, delete, put, patch
app.get("/", (req, res) => {
    res.send("Hello world.");
});

// about us
app.get("/aboutus", (req, res) => {
    res.send("About us page");
});
// current time
app.get("/time", (req, res) => {
    let date = new Date()
    res.send(date)
})
// data
app.get("/students", (req, res) => {
    let students = [{
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "James",
        city: "Austin"
    }]
    res.json(students)
})
// cats
app.get("/bat(wo)?man", (req, res) =>{
    res.send("cats")
})

// app.get("/contact", (req, res) => {
//     let fName = req.query.fName
//     let lName = req.query.lName
//     res.send(`${fName} ${lName}`)
// })

app.get("/contact/:name/:lname", (req, res) => {
    let myName = req.params.name;
    let lName = req.params.lname
    res.send(`${myName} ${lName}`)
})

app.get("/flights/:from/:to", (req, res) => {
    res.send(`
        <b>Departing:</b> ${req.params.from}
        <br><br>
        <b>Arriving:</b> ${req.params.to}
    `)
})

// localhost:3000/add/4/5
// app.get("/add/:num1/:num2", (req, res) => {
//     let numA = parseInt(req.params.num1);
//     let numB = parseInt(req.params.num2);
//     let sum = numA + numB
//     res.send(`${sum}`)
// })

app.get("/add/:num1/:num2", (req, res) => {
    let sum = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.send(`${sum}`);
});

let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "Pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "Poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}

let nav = `
    <ul>
        <li><a href="/dogs/0">Golden Retriever</a></li>
        <li><a href="/dogs/1">Lab</a></li>
        <li><a href="/dogs/2">Pug</a></li>
        <li><a href="/dogs/3">Poodle</a></li>
    </ul>
    `

app.get("/dogs/:id", (req, res) => {
    let id = req.params.id;
    res.send(`
        ${nav}

        <h1>${data.data[id].name}</h1>

        <img src="${data.data[id].img}" height="600px">
    `)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});