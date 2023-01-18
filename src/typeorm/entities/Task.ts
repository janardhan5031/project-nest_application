import { Entity, PrimaryGeneratedColumn, Column ,ManyToOne} from 'typeorm';
import { Member } from './Member';

@Entity({name:'tasks'})
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    due_date: string;

    @Column({default:''})
    assignee:string

    @Column({default:'on progress'})
    status: string
    
    @ManyToOne(()=>Member, (member)=>member.tasks)
    member:Member
}