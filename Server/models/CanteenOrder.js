const mongoose = require("mongoose");

const CanteenOrderSchema = new mongoose.Schema(
    {
        creatorName: { type: String, required: true },
        eventName: { type: String, required: true },
        eventDate: { type: String, required: true },
        eventVenue: { type: String, required: true },
        orderDetails: [
            {
                orderItem: { type: String },
                quantity: { type: Number, default: 1 }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("CanteenOrder", CanteenOrderSchema);