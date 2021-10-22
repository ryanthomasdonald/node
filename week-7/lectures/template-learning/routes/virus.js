const express = require("express");
const router = express.Router();
const axios = require("axios");

// fetch(url)
// .then(result => result.json())       axios does this
// .then(data => {})

router.get("/virus", async (req, res) => {
    try{
        let data = await axios.get("https://api.covidtracking.com/v1/states/current.json")
        res.render("virus", {
            data: data.data,
        })
    }
    catch{
        res.send("Error: Can't get data.")
    }
    // axios.get("https://api.covidtracking.com/v1/states/current.json")
    // .then(data => {
    //     console.log(data.data[0]);
    //     res.render("virus", {
    //         data: data.data,
    //     });
    // });
});

module.exports = router;