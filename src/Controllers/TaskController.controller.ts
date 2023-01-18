import { Controller, Get, Post,Body, Param, ParseIntPipe } from '@nestjs/common';

import { TaskService } from '../Services/TaskServices.service';
import { CreateTaskDto } from '../Utilities/CreateTaskDto.dto';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService) { }
    
    @Get('getAllTasks/:memberId')
    async getTasks(
        @Param('memberId', ParseIntPipe) memberId: number
    ) {
        const tasks = await this.taskService.getAllTasks(memberId)
        return tasks;
    }
    

    @Post('addTask/:memberId')
    createTask(
        @Param('memberId', ParseIntPipe) memberId:number,
        @Body() CreateTaskDto: CreateTaskDto
    ) {
        return this.taskService.createTask(memberId,CreateTaskDto)
    }


}