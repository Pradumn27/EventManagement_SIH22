const mongoose = require("mongoose");

const EventOrderSchema = new mongoose.Schema(
    {
        creatorName: { type: String, required: true },
        eventName: { type: String, required: true },
        bookingDate: { type: Date, required: true },
        bookingVenue: { type: String, required: true },
        peopleInvolved: [
            {
                userName: { type: String }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("EventOrder", EventOrderSchema);