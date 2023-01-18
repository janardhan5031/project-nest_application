import { Controller, Get, Post,Body } from '@nestjs/common';

import { TaskService } from '../Services/TaskServices.service';
import { CreateTaskDto } from '../Utilities/CreateTaskDto.dto';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService) { }
    
    @Get()
    async getTasks() {
        const tasks = await this.taskService.getAllTasks()
        return tasks;
    }
    

    @Post('addTask')
    createTask(@Body() CreateTaskDto: CreateTaskDto) {
        return this.taskService.createTask(CreateTaskDto)
    }


}