
require('dotenv').config()
export const environment = {
  name: "",
  sendgrid: {
    apiKey: process.env.SENDGRID_APIKEY,
    from: process.env.SENDGRID_FROM,
    to: process.env.SENDGRID_TO,
    subject: process.env.SENDGRID_SUBJECT
  }
};
