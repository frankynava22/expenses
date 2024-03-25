import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('GroupExpense')
export class GroupExpense {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    groupname: string;

    @Column()
    type: string;

    @Column()
    amount: number;

    @Column()
    createdBy: string;

    @Column()
    createdOn: string;
}