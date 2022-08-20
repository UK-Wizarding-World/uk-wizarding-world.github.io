const express = require('express');
const app = express()

app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // for showing webpages

const cors = require("cors")
app.use(cors()) // mainly security stuff 

app.get("/", async (req, res, next) => {

    res.status(200).json({ "status": "OK", "version": 1 })
})

app.use("/api", require('./routes/api.js'));

const listener = app.listen(process.env.PORT, () => {
    const open = require("open");
    
    open(`http://localhost:${listener.address().port}/api/economy`, "API FOR DEV", { app: 'chrome' });
    console.log("Your app is listening on port " + listener.address().port);
})