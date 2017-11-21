import { Ingredient } from 'app/shared/ingredient.model';
import { AddIngredient } from './shopping-list.action';
import { Ingredient } from './../../shared/ingredient.model';
import { Action } from '@ngrx/store';

/**
 * Constants
 */
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

/**
 * Classes
 */
export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: {index: number, ingredient: Ingredient}) { }
}
export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public payload:  number) { }
}


/**
 * Export the union of "action"
 */
export type ShoppingListActions = AddIngredient |  AddIngredients | UpdateIngredient | DeleteIngredient;

