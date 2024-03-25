import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('SingleExpense')
export class SingleExpense {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string;

    @Column()
    amount: number;

    @Column()
    createdBy: string;

    @Column()
    createdOn: string;
}