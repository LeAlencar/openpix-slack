'use strict';

const axios = require("axios")

module.exports.sendMessage = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const receivedValue = body.pix.charge.value
  
  const data = {
    text: "!",
    blocks: [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "New Pix Received"
        }
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": `R$ ${receivedValue}`
          },
          {
            "type": "mrkdwn",
            "text": "*Created by:*\n<openpix.com.br|OpenPix>"
          }
        ]
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": "*When:*\nToday"
          }
        ]
      }
    ]
  }
  const response = await axios.post(process.env.SLACK_URI, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    }
  })
  callback(null, {
    statusCode: 200,
    body: "Notification sent!"
  });
};

