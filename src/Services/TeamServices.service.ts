import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

import { Team } from '../typeorm/entities/Team';
import { Member } from '../typeorm/entities/Member';

import { newMemberDetailsDto } from '../Utilities/newMemberDetails.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team) private teamRepository: Repository<Team>,
        @InjectRepository(Member) private memberRepository: Repository<Member>
    ) { }

    
    async createTeam(TeamName: {TeamName:string}) {
        const team = this.teamRepository.create({ ...TeamName });
        // console.log('===> ',TeamName,team)
        return await this.teamRepository.save(team);
    }

    async addNewMember( teamId:number, memberDetails: newMemberDetailsDto) {
        // check the group exists or not if its not then throw the exception error
        const team = await this.teamRepository.findOneBy({ id: teamId })
        
        if (!team) {
            throw new HttpException('team not found',HttpStatus.BAD_REQUEST)
        }
        // else add member to the team
        const newMember = this.memberRepository.create({
            ...memberDetails,
            team
        });

        return this.memberRepository.save(newMember)


    }
}