import { JsonController, Get, Param } from 'kiwi-server';
import * as fs from 'fs';
import * as path from 'path';
import { ResponseCode, ResponseCustom } from '../../utils/response';

const dataPath = path.join(__dirname, 'data', 'projects.json')
const projectData = JSON.parse(fs.readFileSync(dataPath).toString())

@JsonController('/')
export class projectController {

    @Get('project/:id')
    public getProjectById(@Param('id') id: string, request: any, response: any){
        const project = projectData.projects.projects[id]
    
        if (project) {
           return new ResponseCustom(ResponseCode.OK, 'ok', project)
        } else {
            return new ResponseCustom(ResponseCode.BAD_REQUEST, 'No project with that Id', project)
        }
    }

    @Get('/projects')
    public getAllProjects(){
        const projects = projectData.projects
    
        if (projects) {
           return new ResponseCustom(ResponseCode.OK, 'ok', projects)
        } else {
            return new ResponseCustom(ResponseCode.BAD_REQUEST, 'No projects', projects)
        }
    }
}