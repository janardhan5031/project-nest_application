import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/typeorm/entities/Member';

import { TasksController } from '../Controllers/TaskController.controller';
import { TaskService } from '../Services/TaskServices.service';
import { Task } from '../typeorm/entities/Task';

@Module({
    imports: [TypeOrmModule.forFeature([Task,Member])],
    controllers: [TasksController],
    providers:[TaskService]
})
export class TaskModule{}
