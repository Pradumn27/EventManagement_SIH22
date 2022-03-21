const router = require("express").Router();
const eventMember = require("../controllers/eventMembers");
const EventOrder = require("../models/EventOrder");
const Event = require("../models/Event")

router.post("/", async (req, res) => {

    const Evente = new EventOrder({
        creatorName: req.body.creatorName,
        eventName: req.body.eventName,
        bookingDate: req.body.bookingDate,
        bookingVenue: req.body.bookingVenue,
        peopleInvolved: req.body.peopleInvolved,
    })

    const Events = new Event({
        eventName: req.body.eventName,
        eventDate: req.body.bookingDate,
        eventVenue: req.body.bookingVenue
    })

    try {
        const savedOrder = await Evente.save();
        const saveOrder = await Events.save();
        eventMember(savedOrder);
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;