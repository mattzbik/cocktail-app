import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CocktailIngredient } from './CocktailIngredient';
import { Equipment } from './Equipment';
import { Glass } from './Glass';

@ObjectType()
@Entity()
export class Cocktail extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Name of the cocktail' })
  @Column()
  name: string;

  @Field({ description: 'Description of cocktail' })
  @Column()
  description: string;

  @Field((_type) => Glass, { description: 'Glass type' })
  @Column({ type: 'enum', enum: Glass })
  glass: Glass;

  @Field((_type) => [CocktailIngredient], {
    description: 'List of ingredients required',
  })
  ingredients: CocktailIngredient[];

  @Field((_type) => [Equipment], { description: 'List of equipment required' })
  equipment: Equipment[];

  @Field({ description: 'Method to prepare cocktail' })
  @Column()
  method: string;

  @Field(() => String)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
