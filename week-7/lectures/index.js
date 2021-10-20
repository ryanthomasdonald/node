const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
    res.send("Hello from the home page.")
})

app.get("/sith", (req, res) => {
    let htmlString = "";
    htmlString += "<h1>Welcome to the Dark Side.</h1>";
    htmlString += "<h3>We have cookies!</h3>";
    htmlString += "<p>If you've made a wrong turn, click the link below.</p>"
    htmlString += "<a href='/lightside'>Light Side</a>";
    
    res.send(htmlString)
})

app.get("/lightside", (req, res) => {
    let htmlString = ""
    htmlString += "<h1>Welcome to the Light Side.</h1>"

    res.send(htmlString)
;})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})