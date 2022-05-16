"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const environment_1 = require("../../environments/environment");
const sgMail = require("@sendgrid/mail");
const fileFormats = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
class ContactService {
    send(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            sgMail.setApiKey(environment_1.environment.sendgrid.apiKey);
            const isFile = request.Attachment ? true : false;
            let html = '';
            for (let key of Object.keys(request)) {
                html += `<p> <strong>${key} </strong> : ${JSON.stringify(request[key])} </p>`;
            }
            let msg = {
                to: environment_1.environment.sendgrid.to,
                from: environment_1.environment.sendgrid.from,
                subject: environment_1.environment.sendgrid.subject,
                html: html
            };
            if (isFile) {
                let base64Data;
                let type;
                if (request.Attachment.includes(fileFormats[0])) {
                    base64Data = request.Attachment.replace(/^data:application\/pdf;base64,/, "");
                    type = fileFormats[0];
                }
                else if (request.Attachment.includes(fileFormats[1])) {
                    base64Data = request.Attachment.replace(/^data:application\/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,/, "");
                    type = fileFormats[1];
                }
                else {
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
            yield sgMail.send(msg);
            response = {
                Result: true,
                Message: "Thanks for contact us! We will get in touch soon"
            };
            return response;
        });
    }
}
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map