const mongoose = require("mongoose");

const Event = new mongoose.Schema(
    {
        eventName: { type: String, required: true },
        eventDate: { type: Date, required: true },
        eventVenue: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Event", Event);