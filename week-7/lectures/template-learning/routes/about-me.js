const express = require("express");
const router = express.Router();

router.get("/about-me", (req, res) => {
    res.render("about-me");
});

module.exports = router;