const express = require("express");
const router = express.Router();
let dataFile = require("../data/data.json");
let pageSpeakers = dataFile.speakers;

router.get("/speakers", (req, res) => {
    let pagePhotos = [];
    pageSpeakers.forEach(speakerObj => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    res.render("speakers", {
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageTitle: "Roux Meetups - Speakers",
    });
});

router.get("/speakers/:speakerid", (req, res) => {
    let speaker = req.params.speakerid;
    let photos = [];
    let speakers = [];

    pageSpeakers.forEach(speakerObj => {
        if(speakerObj.shortname === speaker){
            photos = [...speakerObj.artwork];
            speakers.push(speakerObj);
        };
    });

    res.render("speakers", {
        artwork: photos,
        speakers: speakers,
        pageTitle: `Roux Meetups - ${speakers[0].name}`,
    });
});

module.exports = router;