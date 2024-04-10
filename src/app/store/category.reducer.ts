// // src/app/store/reducers/category.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import * as CategoryActions from './category.actions';

// export const categoryFeatureKey = 'category';

// export interface State {
//   categories: any[];
//   error: any;
//   // Add other state properties here
// }

// export const initialState: State = {
//   categories: [],
//   error: null
// };

// export const reducer = createReducer(
//   initialState,
//   on(CategoryActions.loadCategoriesSuccess, (state, action) => ({ ...state, categories: action.categories })),
//   on(CategoryActions.loadCategoriesFailure, (state, action) => ({ ...state, error: action.error })),
//   // Handle other actions  
// );
    