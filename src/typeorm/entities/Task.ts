import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'tasks'})
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    due_date: string;

    @Column()
    assignee:string

    @Column({default:'on progress'})
    status:string

}