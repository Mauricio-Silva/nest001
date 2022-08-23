import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn() // ('uuid)
  id: string;

  @Column('text')
  name: string;

  @Column('int')
  age: number;
}
