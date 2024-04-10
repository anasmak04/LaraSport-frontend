// src/app/store/category.state.ts
import { createAction, createReducer, on, props } from '@ngrx/store';

// Action Definitions
export const loadCategoriesSuccess = createAction('[Category] Load Success', props<{ categories: any[] }>());
export const updateCategorySuccess = createAction('[Category] Update Success', props<{ category: any }>());

// Initial State
export interface CategoryState {
  categories: any[];
}

export const initialState: CategoryState = {
  categories: []
};

// Reducer
export const categoryReducer = createReducer(
  initialState,
  on(loadCategoriesSuccess, (state, { categories }) => ({ ...state, categories })),
  on(updateCategorySuccess, (state, { category }) => ({
    ...state,
    categories: state.categories.map(cat => cat.id === category.id ? category : cat)
  }))
);
