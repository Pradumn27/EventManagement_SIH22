const router = require("express").Router();
const fetch = require("node-fetch");
const API_KEY = "EAG107F-GKP481V-K7KH80A-7R4NQ4Y";


router.post("/", async (req, res) => {
    var arr = req.body.platforms;
    var text = req.body.text;
    fetch("https://app.ayrshare.com/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            post: text, // required
            platforms: arr, // required 
        }),
    }).then((res) => res.json())
        .then((json) => console.log(json))
        .catch(console.error);
})

module.exports = router;