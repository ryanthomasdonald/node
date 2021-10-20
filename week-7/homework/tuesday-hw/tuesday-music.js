const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`
    <h1>LIMP BIZKIT 4-EVA!!!</h1>

    <h2>Hearing Limp Bizkit for the first time changed my life. They taught me that you can be both bad AND good at your job SIMULTANEOUSLY and we should all remember to acknowledge the band's level of <a href="https://www.salon.com/2014/04/13/david_foster_wallace_was_right_irony_is_ruining_our_culture/">cultural irony</a> when penning a criticism. I'm certainly not defending their music or what happened at Woodstock '99, but merely saying that their success, for better or worse, wasn't an accident and didn't happen in a vacuum. They leaned into the fact that everyone thought they were supposed to a be joke and just ran with it.</h2>
    
    <h3>Photos:</h3>
    <img src="https://cdn.mos.cms.futurecdn.net/SxHdzDXeVtH8fpLHVLvjZ7-1024-80.jpg" style="height:500px" alt="limp biscuit">
    <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2012717/1024.bizkit.ls.81712.jpg" style="height:500px" alt="limp biscuit">
    <img src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Limp%2BBizkit/Limp%2520Bizkit_16_9_1597396574.jpg" style="height:500px" alt="limp biscuit">
    <br><br>
    <a href="http://localhost:3000/albums">Albums</a>
    `);
});

let albums = {albums: [{
    id: 0,
    name: "Gold Cobra",
    publishDate: "2011",
    imgURL: "https://upload.wikimedia.org/wikipedia/en/e/e3/Gold_Cobra_album_cover.jpg",
    },
    {
    id: 1,
    name: "Significant Other",
    publishDate: "1999",
    imgURL: "https://upload.wikimedia.org/wikipedia/en/b/b8/Limp_Bizkit_Significant_Other.jpg",
    },
    {
    id: 2,
    name: "Three Dollar Bill, Y'all",
    publishDate: "1997",
    imgURL: "https://upload.wikimedia.org/wikipedia/en/a/a4/Limp_Bizkit_Three_Dollar_Bill_Y%27All.jpg",
    }
]}

let nav = `
    <a href="http://localhost:3000">Home</a>
    <ul>
        <li><a href="/albums/0">Gold Cobra</a></li>
        <li><a href="/albums/1">Significant Other</a></li>
        <li><a href="/albums/2">Three Dollar Bill, Y'all</a></li>
    </ul>
    `

app.get("/albums", (req, res) => {
    res.send(`${nav}`)
})

app.get("/albums/:id", (req, res) => {
    let id = req.params.id;
    res.send(`
        ${nav}

        <h1>${albums.albums[id].name}</h1>

        <img src=${albums.albums[id].imgURL}>
    `)
})

// app.get("/dogs/:id", (req, res) => {
//     let id = req.params.id;
//     res.send(`
//         ${nav}

//         <h1>${data.data[id].name}</h1>

//         <img src="${data.data[id].img}" height="600px">
//     `)
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
