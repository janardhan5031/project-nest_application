
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../typeorm/entities/Task';


@Injectable()
export class TaskService{
    
    constructor(@InjectRepository(Task) private taskRepository:Repository<Task> ) {
        
    }

}