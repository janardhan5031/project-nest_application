import { Controller, Get, Post,Body, Param, ParseIntPipe } from '@nestjs/common';
import { TaskStatusUpdate } from 'src/Utilities/TaskStatusUpdate.dto';

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
    
    // adding task to a member
    @Post('addTask/:memberId')
    createTask(
        @Param('memberId', ParseIntPipe) memberId:number,
        @Body() CreateTaskDto: CreateTaskDto
    ) {
        return this.taskService.createTask(memberId,CreateTaskDto)
    }

    // updating task properties/ status
    @Post('updateTask/:taskId')
    updateTask(
        @Param('taskId', ParseIntPipe) taskId: number,
        @Body() status: TaskStatusUpdate
    ) {
        return this.taskService.updateTaskStatus(taskId, status);
    }


}