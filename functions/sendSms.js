const request = require('request');
const message = require("../functions/message");

function sendSms(user,friends,phone){
    request.post('https://textbelt.com/text', {
        form: {
            phone: phone,
            message: message(user,friends),
            key: '5fe7344ef89d17ce7fa0a0434695080cf70e17b7sLVbrzb6HhPt5WOfFKJvVh18m',
        },
        }, function(err, httpResponse, body) {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log(JSON.parse(body));
        })
}





module.exports = sendSms;