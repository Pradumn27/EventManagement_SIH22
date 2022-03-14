const router = require("express").Router();
const Menu = require("../models/Menu");

router.get("/", async (req, res) => {
    Menu.find({}, function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    })
})

module.exports = router;