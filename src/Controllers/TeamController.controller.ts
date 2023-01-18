import { Controller, Body, Get, Post,Param,ParseIntPipe } from '@nestjs/common';

import { TeamService } from '../Services/TeamServices.service';

import { newMemberDetailsDto } from '../Utilities/newMemberDetails.dto';

@Controller('team')
export class TeamController{

    constructor( private readonly teamService:TeamService){}

    // create a team with name
    @Post('createTeam')
    createTeam(
        @Body() TeamName: {TeamName:string}
    ) {
        return this.teamService.createTeam(TeamName )
    }

    @Post('addMember/:teamId')
    addMembersToTeam(
        @Param('teamId', ParseIntPipe) id: number,
        @Body() newMemberDetails: newMemberDetailsDto
    ) {
        return this.teamService.addNewMember(id,newMemberDetails)
    }

}