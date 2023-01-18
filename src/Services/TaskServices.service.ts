
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../typeorm/entities/Task';
import { CreateTaskDto } from '../Utilities/CreateTaskDto.dto';

@Injectable()
export class TaskService{
    
    constructor(@InjectRepository(Task) private taskRepository:Repository<Task> ) {
        
    }

    getAllTasks() {
        return this.taskRepository.find()
    }

    createTask(taskDetails:CreateTaskDto) {
        const newTask = this.taskRepository.create({ ...taskDetails })
         
        return this.taskRepository.save(newTask);
    }

}