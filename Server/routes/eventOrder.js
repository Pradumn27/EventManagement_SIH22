const router = require("express").Router();
const eventMember = require("../controllers/eventMembers");
const EventOrder = require("../models/EventOrder");

router.post("/", async (req, res) => {

    const Event = new EventOrder({
        creatorName: req.body.creatorName,
        eventName: req.body.eventName,
        bookingDate: req.body.bookingDate,
        bookingVenue: req.body.bookingVenue,
        peopleInvolved: req.body.peopleInvolved,
    })

    try {
        const savedOrder = await Event.save();
        eventMember(savedOrder);
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;