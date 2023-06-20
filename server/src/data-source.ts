import * as dotenv from 'dotenv';
import path from 'path';
import { DataSource } from 'typeorm';
import { Cocktail } from './entities/Cocktail';
import { CocktailIngredient } from './entities/CocktailIngredient';
import { Equipment } from './entities/Equipment';
import { Glass } from './entities/Glass';
import { Ingredient } from './entities/Ingredient';
import { User } from './entities/User';

dotenv.config();

export const postgresDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: false,
  entities: [Cocktail, CocktailIngredient, Equipment, Ingredient, Glass, User],
  migrations: [path.join(__dirname, './migrations/*')],
});
