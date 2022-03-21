const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        bureau: req.body.bureau,
        password:
            CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
            ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(
            {
                email: req.body.email
            }
        );

        if (!user) {
            res.status(401).json("Wrong Email");
        }
        else {
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );


            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

            const inputPassword = req.body.password;

            if (originalPassword != inputPassword) {
                res.status(401).json("Wrong Password");
            }
            else {
                res.status(200).json(user);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;