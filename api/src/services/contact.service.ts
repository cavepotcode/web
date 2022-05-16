import { ContactRequest } from "../types/contactRequest";
import { environment } from "../../environments/environment";

const sgMail = require("@sendgrid/mail");
const fileFormats = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

export class ContactService {
  async send(request: any) {
    let response;
    sgMail.setApiKey(environment.sendgrid.apiKey);
    const isFile = request.Attachment ? true : false;
    let html = '';
    for(let key of Object.keys(request)){
      html+= `<p> <strong>${key} </strong> : ${JSON.stringify(request[key])} </p>`;
    }
    let msg: any = {
      to: environment.sendgrid.to,
      from: environment.sendgrid.from,
      subject: environment.sendgrid.subject,
      html: html
    };

    if (isFile) {
      let base64Data;
      let type;

      if (request.Attachment.includes(fileFormats[0])) {
        base64Data = request.Attachment.replace(
          /^data:application\/pdf;base64,/,
          ""
        );
        type = fileFormats[0];
      } else if (request.Attachment.includes(fileFormats[1])) {
        base64Data = request.Attachment.replace(
          /^data:application\/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,/,
          ""
        );
        type = fileFormats[1];
      } else {
        response = {
          Result: false,
          Message: "The file attached must be pdf or docx. Please try again."
        };
        return response;
      }

      msg.attachments = [
        {
          filename: `Attachment`,
          content: base64Data,
          type: type,
          disposition: "attachment"
        }
      ];
    }

    await sgMail.send(msg);
    response = {
      Result: true,
      Message: "Thanks for contact us! We will get in touch soon"
    };

    return response;
  }
}
