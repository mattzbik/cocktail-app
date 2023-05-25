import * as dotenv from 'dotenv';
import path from 'path';
import { DataSource } from 'typeorm';
import { Cocktail } from './entities/Cocktail';
import { CocktailIngredient } from './entities/CocktailIngredient';
import { Equipment } from './entities/Equipment';
import { Glass } from './entities/Glass';
import { Ingredient } from './entities/Ingredient';

dotenv.config();

export const postgresDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: false,
  entities: [Cocktail, CocktailIngredient, Equipment, Ingredient, Glass],
  migrations: [path.join(__dirname, './migrations/*')],
});
