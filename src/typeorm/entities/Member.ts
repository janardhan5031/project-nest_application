import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Team } from './Team';

@Entity('members')
export class Member{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    email: String
    
    @Column()
    number: number
    
    @ManyToOne(() => Team, (team) => team.members)
    team:Team


}

