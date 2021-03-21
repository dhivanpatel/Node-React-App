// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC39e9a211d6030a4f27051c4f660eae22";
const authToken = "4cb3aebd83f5948f75ae3c4a506aae68";
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+18563473153',
     to: '+16304322202'
   })
  .then(message => console.log(message.sid));
