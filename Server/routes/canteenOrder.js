const router = require("express").Router();
const canteenPerson = require("../controllers/canteenPerson");
const CanteenOrder = require("../models/CanteenOrder");

router.post("/", async (req, res) => {

    const Order = new CanteenOrder({
        creatorName: req.body.creatorName,
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventVenue: req.body.eventVenue,
        orderDetails: req.body.orderDetails,
    })

    try {
        const savedOrder = await Order.save();
        canteenPerson(savedOrder);
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;