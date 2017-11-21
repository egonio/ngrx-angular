import { Action } from '@ngrx/store';
import { Ingredient } from '../../../app/shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';



const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}


/*
  will get the current state and it will return an updated state
*/
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  // uses switch to check which action is being used
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
    return{
      ...state,
      ingredients: [...state.ingredients, action.payload]
    };
    case ShoppingListActions.ADD_INGREDIENTS:
      return{
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingredients = [...state.ingredients];
      ingredients[action.payload.index] = updatedIngredient;
      return{
        ...state,
        ingredients: ingredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(action.payload, 1);
      return{
        ...state,
        ingredients: oldIngredients
      }
    default:
    return state;
  }
}
