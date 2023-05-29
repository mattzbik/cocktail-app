import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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

  @Column()
  glassId: string;

  @Field(() => Glass, { description: 'Glass type' })
  @ManyToOne(() => Glass, (g) => g.cocktail)
  glass: Glass;

  @Field(() => [CocktailIngredient], {
    description: 'List of ingredients required',
  })
  ingredients: CocktailIngredient[];

  @Field((_type) => [Equipment], { description: 'List of equipment required' })
  equipment: Equipment[];

  @Field({ description: 'Method to prepare cocktail' })
  @Column()
  method: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
