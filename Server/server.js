const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const menu = require("./routes/menu");
const memberList = require("./routes/memberList");
const eventOrder = require("./routes/eventOrder");
const canteenOrder = require("./routes/canteenOrder");
const post = require("./routes/post");
const upcomingEvents = require("./routes/upcomingEvents.js")

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected");
}).catch(err => {
    console.log(err)
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/api/auth", authRoute);
app.use("/api/menu", menu);
app.use("/api/members", memberList);
app.use("/api/eventOrder", eventOrder);
app.use("/api/canteenOrder", canteenOrder);
app.use("/api/post", post);
app.use("/api/upcomingEvents", upcomingEvents);

server.listen(process.env.PORT || 5001, () => console.log(`Server has started.`));