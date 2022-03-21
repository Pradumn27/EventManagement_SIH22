const router = require("express").Router();
const Event = require("../models/Event");

router.get("/", async (req, res) => {
    Event.find({}, function (err, result) {

        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    })
})

module.exports = router;