const dotenv = require('dotenv');
const User = require('../models/User');
dotenv.config();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
var nodemailer = require('nodemailer');
let twillioNumber = process.env.TWILIO_NUMBER;

var transport = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    }
)

function eventMember(Order) {
    Order.peopleInvolved.forEach(person => {
        console.log(person)
        User.findOne({ "username": person.userName }, function (_, doc) {
            let phone = "+91" + doc.phone;

            client.messages.create({
                body: `Hello ${person.userName}!! The ${Order.eventName} is being organized on ${Order.bookingDate} at ${Order.bookingVenue} you have been assigned the role for ${person.roleAssigned} .Please check your duties on the portal.`,
                from: twillioNumber,
                to: phone,
            }).then().catch((err) => console.log(err));

            var mailOptions = {
                from: process.env.EMAIL,
                to: doc.email,
                subject: `AICTE Event : ${Order.eventName}`,
                text: `Hello ${doc.username}!! The ${Order.eventName} is being organized on ${Order.bookingDate} at ${Order.bookingVenue} you have been assigned the role for ${person.roleAssigned} .Please check your duties on the portal.`
            }
            transport.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err);
                }
            })

        })
    })
}

module.exports = eventMember;