import path from 'path';
import { DataSource } from 'typeorm';
import { Cocktail } from './entities/Cocktail';
import { CocktailIngredient } from './entities/CocktailIngredient';
import { Equipment } from './entities/Equipment';
import { Ingredient } from './entities/Ingredient';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: true,
  entities: [Cocktail, CocktailIngredient, Equipment, Ingredient],
  migrations: [path.join(__dirname, './migrations/*')],
});
