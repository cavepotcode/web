import { createKiwiServer, IKiwiOptions, AuthorizeResponse } from "kiwi-server";
import * as http from "http";
import { ContactController } from "./controllers/contact.controller";
import {projectController} from './controllers/project.controller'

async function validateAuthentication(
  request: http.IncomingMessage,
  roles: Array<string>
): Promise<AuthorizeResponse | boolean> {
  console.log(roles);
  return true;
}

const options: IKiwiOptions = {
  controllers: [ContactController, projectController],
  authorization: validateAuthentication,
  middlewares: [],
  cors: {
    enabled: true,
    domains: []
  },
  documentation: {
    enabled: true,
    path: "/apidoc"
  },
  log: true,
  port: 8087,
  prefix: '/v1'
};
const server = createKiwiServer(options);
