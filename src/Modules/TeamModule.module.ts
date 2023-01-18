import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamController } from '../Controllers/TeamController.controller';
import { TeamService } from '../Services/TeamServices.service';

import { Team } from '../typeorm/entities/Team';
import { Member } from '../typeorm/entities/Member';


@Module({
    imports: [TypeOrmModule.forFeature([Team,Member])],
    controllers: [TeamController],
    providers:[TeamService]
})
export class TeamModule{}