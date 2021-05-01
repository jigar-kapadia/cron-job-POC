
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey('SG')
app = express();

cron.schedule("* * * * *", () => {
    var currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
    //console.log(new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}));
    //console.log("running a task every minute");
    switch (currentTime) {
        case '18:59':
            const msg = {
                to: 'jigark22@gmail.com',
                from: 'support@jk.com',
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
              };
              sendGrid.send(msg, (err, response) =>{
                  if(err)
                  {
                      console.log('Error')
                      console.log(err);
                  }
                  else
                  {
                      console.log(response);
                  }
              });
          break;
        case 'Mangoes':
        case 'Papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log('No tasks or reminder available at ' + currentTime + '.');
      }
    
});

app.listen(3001, ()=> {
    console.log(new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}));
    console.log(new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}) === '18:49');
})

