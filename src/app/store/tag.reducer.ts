// // src/app/store/reducers/tag.reducer.ts

// import { createReducer, on } from '@ngrx/store';
// import * as TagActions from './tag.action';

// export interface State {
//   tags: any[];
//   error: any;
// }

// export const initialState: State = {
//   tags: [],
//   error: null
// };

// export const reducer = createReducer(
//   initialState,
//   on(TagActions.loadTagsSuccess, (state, { tags }) => ({ ...state, tags })),
//   on(TagActions.loadTagsFailure, (state, { error }) => ({ ...state, error })),
//   // Handle other actions similarly
// );
