import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    quantity: number

    @Column()
    price: number

    @Column()
    description: string
}
