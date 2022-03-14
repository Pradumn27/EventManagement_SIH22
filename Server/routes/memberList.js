const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
    User.find({}, function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    })
})

module.exports = router;