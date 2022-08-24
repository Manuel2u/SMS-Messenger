 var XMLHttpRequest = require('xhr2');
 //  var xhr = new XMLHttpRequest();
 var request = new XMLHttpRequest();
 require('dotenv').config();

 request.open('POST', 'https://api.wittyflow.com/v1/messages/send');

 request.setRequestHeader('Content-Type', 'application/json');

 request.onreadystatechange = function () {
     if (this.readyState === 4) {
         console.log('Status:', this.status);
         console.log('Headers:', this.getAllResponseHeaders());
         console.log('Body:', this.responseText);
     }
 };

let message = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

 var body = {
     'from': '',
     'to': '',
     'type': '1', // <!-- use 0 for flash sms and 1 for plain sms -->
     'message': message,
     'app_id': process.env.APP_ID,
     'app_secret': process.env.APP_SECRET
 };

 request.send(JSON.stringify(body));





