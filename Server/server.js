const app = require("express")();
const server = require("http").Server(app);
const cors = require("cors");

app.use(cors);

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));