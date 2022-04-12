const router = require("express").Router();
const fetch = require("node-fetch");
const API_KEY = "BGQ1HQ1-4GZMQDQ-J8J98EN-JR1J5XB";


router.post("/", async (req, res) => {
    var arr = req.body.platforms;
    var text = req.body.text;
    console.log(arr);

    fetch("https://app.ayrshare.com/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            post: text, // required
            platforms: ['Facebook', 'Twitter'], // required 
        }),
    }).then((res) => res.json())
        .then((json) => console.log(json))
        .catch(console.error);
})

module.exports = router;