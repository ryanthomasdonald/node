const express = require("express");
const router = express.Router();

router.get("/about-us", (req, res) => {
    res.send(`
        <link rel="stylesheet" href="css/styles.css">
        
        <h1>Hello world.</h1>
    `);
});

module.exports = router;