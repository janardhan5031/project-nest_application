import { Controller, Get, Post } from '@nestjs/common';

import { TaskService } from '../Services/TaskServices.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService) { }
    
    

}