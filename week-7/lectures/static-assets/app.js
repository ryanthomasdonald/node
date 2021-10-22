const express = require("express");
const app = express();
const port = 3000;
// const homePage = require("./routes/index");

app.use(express.static("public"));                // goes BEFORE pages (route handlers)

// MVC model - model, viewer, controller

app.use(require("./routes/index"));                // NOTE SYNTAX!!!!!
app.use(require("./routes/about-us"));
app.use(require("./routes/data"));

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});