const express = require("express");
const app = express();
const port = 3000;

// static assets
app.use(express.static("public"));

// reference to EJS
app.set("view engine", "ejs");
// app.set("views", "views");                    // only use if changing default folder to custom folder name

// registering subroutes
app.use(require("./routes/index"));              // ".js" is optional
app.use(require("./routes/about-me"));
app.use(require("./routes/virus"));

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});