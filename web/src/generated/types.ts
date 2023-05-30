import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cocktail = {
  __typename?: 'Cocktail';
  /** Description of cocktail */
  description: Scalars['String']['output'];
  /** List of equipment required */
  equipment: Array<Equipment>;
  /** Glass type */
  glass: Glass;
  id: Scalars['String']['output'];
  /** List of ingredients required */
  ingredients: Array<CocktailIngredient>;
  /** Method to prepare cocktail */
  method: Scalars['String']['output'];
  /** Name of the cocktail */
  name: Scalars['String']['output'];
};

export type CocktailIngredient = {
  __typename?: 'CocktailIngredient';
  id: Scalars['String']['output'];
  /** Ingredient */
  ingredient: Ingredient;
  /** Measurement of ingredient */
  measurement?: Maybe<Scalars['String']['output']>;
  /** Quantity of ingredient */
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  /** Description of ingredient */
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Name of equipment */
  name: Scalars['String']['output'];
};

export type Glass = {
  __typename?: 'Glass';
  id: Scalars['String']['output'];
  /** Name of glassware */
  name?: Maybe<Scalars['String']['output']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  /** Description of ingredient */
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Name of ingredient */
  name: Scalars['String']['output'];
};

export type PaginatedCocktails = {
  __typename?: 'PaginatedCocktails';
  cocktails: Array<Cocktail>;
  hasMore: Scalars['Boolean']['output'];
};

export type PaginatedGlass = {
  __typename?: 'PaginatedGlass';
  glass: Array<Glass>;
  hasMore: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  cocktail?: Maybe<Cocktail>;
  cocktails: PaginatedCocktails;
  glass?: Maybe<Glass>;
  glasses: PaginatedGlass;
  ping: Scalars['String']['output'];
};


export type QueryCocktailArgs = {
  id: Scalars['String']['input'];
};


export type QueryCocktailsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};


export type QueryGlassArgs = {
  id: Scalars['String']['input'];
};


export type QueryGlassesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type CocktailQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CocktailQuery = { __typename?: 'Query', cocktail?: { __typename?: 'Cocktail', description: string, id: string, method: string, name: string, glass: { __typename?: 'Glass', id: string, name?: string | null }, ingredients: Array<{ __typename?: 'CocktailIngredient', id: string, measurement?: string | null, quantity?: number | null, ingredient: { __typename?: 'Ingredient', description: string, id: string, name: string } }> } | null };

export type CocktailsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
}>;


export type CocktailsQuery = { __typename?: 'Query', cocktails: { __typename?: 'PaginatedCocktails', hasMore: boolean, cocktails: Array<{ __typename?: 'Cocktail', description: string, id: string, method: string, name: string, glass: { __typename?: 'Glass', id: string, name?: string | null }, ingredients: Array<{ __typename?: 'CocktailIngredient', id: string, measurement?: string | null, quantity?: number | null, ingredient: { __typename?: 'Ingredient', description: string, id: string, name: string } }> }> } };

export type GlassQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GlassQuery = { __typename?: 'Query', glass?: { __typename?: 'Glass', id: string, name?: string | null } | null };

export type GlassesQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type GlassesQuery = { __typename?: 'Query', glasses: { __typename?: 'PaginatedGlass', hasMore: boolean, glass: Array<{ __typename?: 'Glass', id: string, name?: string | null }> } };


export const CocktailDocument = gql`
    query Cocktail($id: String!) {
  cocktail(id: $id) {
    description
    id
    method
    name
    glass {
      id
      name
    }
    ingredients {
      id
      measurement
      quantity
      ingredient {
        description
        id
        name
      }
    }
  }
}
    `;

/**
 * __useCocktailQuery__
 *
 * To run a query within a React component, call `useCocktailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCocktailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCocktailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCocktailQuery(baseOptions: Apollo.QueryHookOptions<CocktailQuery, CocktailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CocktailQuery, CocktailQueryVariables>(CocktailDocument, options);
      }
export function useCocktailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CocktailQuery, CocktailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CocktailQuery, CocktailQueryVariables>(CocktailDocument, options);
        }
export type CocktailQueryHookResult = ReturnType<typeof useCocktailQuery>;
export type CocktailLazyQueryHookResult = ReturnType<typeof useCocktailLazyQuery>;
export type CocktailQueryResult = Apollo.QueryResult<CocktailQuery, CocktailQueryVariables>;
export const CocktailsDocument = gql`
    query Cocktails($cursor: String, $limit: Int!) {
  cocktails(cursor: $cursor, limit: $limit) {
    cocktails {
      description
      id
      method
      name
      glass {
        id
        name
      }
      ingredients {
        id
        measurement
        quantity
        ingredient {
          description
          id
          name
        }
      }
    }
    hasMore
  }
}
    `;

/**
 * __useCocktailsQuery__
 *
 * To run a query within a React component, call `useCocktailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCocktailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCocktailsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCocktailsQuery(baseOptions: Apollo.QueryHookOptions<CocktailsQuery, CocktailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CocktailsQuery, CocktailsQueryVariables>(CocktailsDocument, options);
      }
export function useCocktailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CocktailsQuery, CocktailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CocktailsQuery, CocktailsQueryVariables>(CocktailsDocument, options);
        }
export type CocktailsQueryHookResult = ReturnType<typeof useCocktailsQuery>;
export type CocktailsLazyQueryHookResult = ReturnType<typeof useCocktailsLazyQuery>;
export type CocktailsQueryResult = Apollo.QueryResult<CocktailsQuery, CocktailsQueryVariables>;
export const GlassDocument = gql`
    query Glass($id: String!) {
  glass(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGlassQuery__
 *
 * To run a query within a React component, call `useGlassQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlassQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlassQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGlassQuery(baseOptions: Apollo.QueryHookOptions<GlassQuery, GlassQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlassQuery, GlassQueryVariables>(GlassDocument, options);
      }
export function useGlassLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlassQuery, GlassQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlassQuery, GlassQueryVariables>(GlassDocument, options);
        }
export type GlassQueryHookResult = ReturnType<typeof useGlassQuery>;
export type GlassLazyQueryHookResult = ReturnType<typeof useGlassLazyQuery>;
export type GlassQueryResult = Apollo.QueryResult<GlassQuery, GlassQueryVariables>;
export const GlassesDocument = gql`
    query Glasses($limit: Int!, $cursor: String) {
  glasses(limit: $limit, cursor: $cursor) {
    glass {
      id
      name
    }
    hasMore
  }
}
    `;

/**
 * __useGlassesQuery__
 *
 * To run a query within a React component, call `useGlassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlassesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGlassesQuery(baseOptions: Apollo.QueryHookOptions<GlassesQuery, GlassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlassesQuery, GlassesQueryVariables>(GlassesDocument, options);
      }
export function useGlassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlassesQuery, GlassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlassesQuery, GlassesQueryVariables>(GlassesDocument, options);
        }
export type GlassesQueryHookResult = ReturnType<typeof useGlassesQuery>;
export type GlassesLazyQueryHookResult = ReturnType<typeof useGlassesLazyQuery>;
export type GlassesQueryResult = Apollo.QueryResult<GlassesQuery, GlassesQueryVariables>;