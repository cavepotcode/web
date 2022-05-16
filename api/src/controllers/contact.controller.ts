import { JsonController, Post, Body } from "kiwi-server";
import { ContactService } from "../services/contact.service";

@JsonController("/contact")
export class ContactController {
  constructor(private service: ContactService) {}

  @Post("/send")
  public async send(@Body() body: any) {
    let response;

    try {
      const req = body;
      response = await this.service.send(req);
    } catch (err) {
      console.log(err.Message);
      response = {
        Result: false,
        Message: "Ups! can't send the email. Please try again"
      };
    }
    return response;
  }
}
