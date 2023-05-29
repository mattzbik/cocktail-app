import DataLoader from 'dataloader';
import { In } from 'typeorm';
import { CocktailIngredient } from '../entities/CocktailIngredient';
import { Ingredient } from '../entities/Ingredient';

export const ingredientLoader = () =>
  new DataLoader<string, CocktailIngredient[]>(async (ids) => {
    /**
     * @todo - Possibly write into single statement to prevent multiple calls to the DB.
     *         Will revisit after basic FE implemnetation complete and more planning.
     */
    const cocktailIngredients = await CocktailIngredient.find({
      where: {
        cocktailId: In(ids),
      },
    });

    const ingredientIds: string[] = [];
    cocktailIngredients.forEach((ci) => ingredientIds.push(ci.ingredientId));

    const ingredientIdToCocktailIngredient: Record<
      string,
      CocktailIngredient[]
    > = {};

    const ingredients = await Ingredient.find({
      where: { id: In(ingredientIds) },
      relations: {},
    });

    cocktailIngredients.forEach((i) => {
      i.ingredient = ingredients.find((ing) => i.ingredientId === ing.id);
      ingredientIdToCocktailIngredient[i.cocktailId] = [...cocktailIngredients];
    });

    return ids.map((id) => ingredientIdToCocktailIngredient[id]);
  });
