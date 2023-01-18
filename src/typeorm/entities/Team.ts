import { Entity ,PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

import { Member } from './Member';

@Entity('teams')
export class Team{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    TeamName: string

    @OneToMany(() => Member, (member) => member.team)
    members: Member[];
    
}