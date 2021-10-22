// import express
const express = require("express");
// invoke express router
const router = express.Router();       // subroute

// home page
router.get("/", (req, res) => {        // note "router"
    res.send("home page");
});

// export module
module.exports = router;