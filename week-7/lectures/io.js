// importing file system core module from Node
const fs = require("fs")

// error-first callbacks
fs.readFile("preamble.txt", (err, contentsOfFile)=>{
    if(err){
        console.log(error.message)
        return
    }
    console.log(`File Contents: ${contentsOfFile}`)
})