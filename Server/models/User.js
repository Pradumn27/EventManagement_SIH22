const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: Number, required: true },
        bureau: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        rolesAssigned: {
            type: String,
            default: "",
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);