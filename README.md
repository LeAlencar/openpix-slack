# Slack Integration
This is a aws lambda function to receive new transaction informations from [OpenPix](https://www.openpix.com.br) @ your company's slack workspace.

## Getting Started

First, you'll need to setup [Incoming Webhooks](https://api.slack.com/messaging/webhooks) because we need the URL that Slack provides to send a text into any channel.

Then, create a lambda function at your own AWS following this one. Change the **SLACK_URI** with the URL that Slack provides to your channel. 

After that, you'll need to setup an API Gateway in AWS, this API will only call your lambda function. This tutorial will do the job for you: [Lambda & API Gateway](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html)

### Example
![Example](/.github/imgs/example.png)

This is what this code is doing right now. It's just a basic setup, but you can always modify it by yourself. Slack has a lot of possibilities here: [Text Format](https://api.slack.com/reference/surfaces/formatting). 

And you can see what the webhook from OpenPix returns here: [Webhook Sample](https://developers.openpix.com.br/docs/webhook/webhook-samples)