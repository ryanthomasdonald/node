const express = require("express");
const router = express.Router();
// import data from data.json
const dataFile = require("../data/data.json");      // JS is converting the JSON to a JS object

// {speakers: [{}, {}, {}]}

router.get("/", (req, res) => {
    let pageSpeakers = dataFile.speakers;           // an array of objects
    let pagePhotos = [];
    pageSpeakers.forEach(speakerObj => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    res.render("index", {
        artwork: pagePhotos,
        pageTitle: "Roux Meetups",
    });
});

module.exports = router;