const dotenv = require('dotenv');
const User = require('../models/User');
dotenv.config();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

let twillioNumber = process.env.TWILIO_NUMBER;
function canteenPerson(Order) {
    User.findOne({ "username": Order.creatorName }, function (err, doc) {

        let a = `AICTE EVENT : ${Order.eventName} on ${Order.eventDate} at ${Order.eventVenue}
        Order Details: 
        `;
        Order.orderDetails.forEach(order => {
            a += order.orderItem;
            a += ` quantity : `;
            a += order.quantity;
            a += ` `;
        })
        a += `
        Contact ${doc.username} ${doc.phone}`;

        let b = `Your Canteen Order is placed. For further Queries please contact on +919821079400`

        client.messages.create({
            body: a,
            from: twillioNumber,
            to: doc.phone,
        }).then().catch((err) => console.log(err))

        client.messages.create({
            body: b,
            from: twillioNumber,
            to: "+919821079400",
        }).then().catch((err) => console.log(err))

    });
}

module.exports = canteenPerson;