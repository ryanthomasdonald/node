// bring in a core module
const http = require("http")

// set up a server
const server = http.createServer((request, response)=>{
    switch(request.url){
        case "/":
            response.setHeader("Content-Type", "text/html")
            response.end("<h1>Hello world.</h1>")
            break;
        case "/about-us":
            response.setHeader("Content-Type", "text/html")
            response.end("<h1>About Us</h1><h2>Learning Node</h2>")
            break;
        case "/current-time":
            response.setHeader("Content-Type", "text/html")
            let date = new Date()
            response.end(`${date}`)
            break;
        case "/data":
            response.setHeader("Content-Type", "application/json")
            let students = [{
                    fName: "Victoria",
                    city: "Atlanta"
                },
                {
                    fName: "Andrew",
                    city: "Atlanta"
                },
                {
                    fName: "James",
                    city: "Austin"
                }
            ]
            let studentsJSON = JSON.stringify(students)
            response.end(studentsJSON)
            break;
        default:
            break;
    }
})

// start server
server.listen(3000, ()=>{
    console.log("Server is running on port 3000.")
})