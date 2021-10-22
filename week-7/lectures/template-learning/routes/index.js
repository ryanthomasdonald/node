const express = require("express");
const router = express.Router();

let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]

let myInfo = {
    fName: "Ryan",
    lName: "Donald",
}

let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]

// localhost:3000/cityInfo/2
router.get("/cityInfo/:id", (req, res) => {
    let id = req.params.id;
    res.render("index", {
        pageTitle: cities[id],
        pic: pictures[id],
        val: 99,
        cities: cities,
        user: true,
        info: myInfo,
    });
});

router.get("/", (req, res) => {
    // res.send("Home page");
    res.render("index", {               // .ejs is optional, object is where data gets passed through to matching .ejs file
        city: "Atlanta",
        val: 99,
        cities: cities,
        user: true,
        info: myInfo,
    })
});

module.exports = router;