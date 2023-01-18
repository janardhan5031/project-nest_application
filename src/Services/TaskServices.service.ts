
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../typeorm/entities/Task';
import { CreateTaskDto } from '../Utilities/CreateTaskDto.dto';
import { Member } from 'src/typeorm/entities/Member';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
        @InjectRepository(Member) private memberRepository: Repository<Member>
    ) { }

    async getAllTasks(memberId:number) {
        const fetchedMember = await this.memberRepository.find({ relations: ['tasks'] });
        // console.log(fetchedMember)

        return fetchedMember[0].tasks;   
    }

    async createTask(memberId: number, taskDetails: CreateTaskDto) {
        const member = await this.memberRepository.findOneBy({ id: memberId })
        // console.log(member)
        
        const newTask = this.taskRepository.create({ ...taskDetails,assignee:member.name,member })

        const createdTask = await this.taskRepository.save(newTask);
        // console.log(createdTask);
        
        return createdTask;
    }

}