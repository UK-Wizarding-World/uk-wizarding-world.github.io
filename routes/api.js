const express = require('express');
const router = express.Router();

// Endpoints of api/economy go here

router.get("/", async (req, res) => {
    res.status(200).json({ status: "OK" })
})

router.use("/economy", require('./api-routes/economy.js'))

// EXPORT the router

module.exports = router