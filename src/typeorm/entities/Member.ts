import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { Task } from './Task';

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
    team: Team
    
    @OneToMany(() => Task, (task) => task.member)
    tasks:Task[]

}

