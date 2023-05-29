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
import { Cocktail } from './Cocktail';
import { Ingredient } from './Ingredient';

@ObjectType()
@Entity()
export class CocktailIngredient extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cocktailId: string;

  @ManyToOne(() => Cocktail)
  cocktail: Cocktail;

  @Column()
  ingredientId: string;

  @Field({ description: 'Ingredient' })
  @ManyToOne(() => Ingredient)
  ingredient?: Ingredient;

  @Field({ description: 'Quantity of ingredient', nullable: true })
  @Column()
  quantity: number;

  @Field({ description: 'Measurement of ingredient', nullable: true })
  @Column()
  measurement: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
