import { useEffect, useState } from 'react';
import { useCocktailQuery } from '../../../generated/types';
import { HookResult } from '../../../hooks/types';

interface CocktailResponse {
  name: string;
  description: string;
  ingredients: Ingredient[];
  method: string;
}

interface Ingredient {
  description: string;
  id?: string;
  measurement: string;
  name: string;
  quantity: number;
}

export const useGetCocktailData = (
  id: string
): HookResult<CocktailResponse> => {
  const [state, setState] = useState<HookResult<CocktailResponse>>({
    data: null,
    loading: true,
    error: null,
  });

  const {
    data: cocktailData,
    loading: cocktailLoading,
    error: cocktailError,
  } = useCocktailQuery({ variables: { id } });

  useEffect(() => {
    if (cocktailLoading) {
      setState({ loading: true });
    }
    if (cocktailError) {
      setState({ loading: false, error: cocktailError });
    }
    if (cocktailData) {
      const cocktail = cocktailData.cocktail;
      const ingredients = (cocktail?.ingredients ?? []).reduce<Ingredient[]>(
        (acc, curr) => {
          acc.push({
            description: curr.ingredient.description ?? '',
            measurement: curr.measurement ?? '',
            name: curr.ingredient.name,
            quantity: curr.quantity ?? 0,
          });

          return acc;
        },
        []
      );

      console.log(ingredients);
      setState({
        data: {
          name: cocktail?.name ?? '',
          description: cocktail?.description ?? '',
          ingredients: ingredients,
          method: cocktail?.method ?? '',
        },
        loading: false,
        error: null,
      });
    }
  }, [cocktailData, cocktailLoading, cocktailError]);

  return state;
};
