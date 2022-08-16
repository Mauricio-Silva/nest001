import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateCat {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  age: number;
}
