import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('varchar')
  public name: string;
}
