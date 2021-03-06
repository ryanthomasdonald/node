const express = require("express");
const app = express();
const port = 3000;

// static assets
app.use(express.static("public"));

// templates
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/speakers"))
app.use(require("./routes/feedback"))

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});