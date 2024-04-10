// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import * as CategoryActions from './category.actions';
// import { CategoryServiceService } from '../services/category/category-service.service';

// @Injectable()
// export class CategoryEffects {

//   loadCategories$ = createEffect(() => this.actions$.pipe(
//     ofType(CategoryActions.loadCategories),
//     mergeMap(() => this.categoryService.findAll()
//       .pipe(
//         map(categories => CategoryActions.loadCategoriesSuccess({ categories })),
//         catchError(error => of(CategoryActions.loadCategoriesFailure({ error })))
//       ))
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private categoryService: CategoryServiceService
//   ) {}
// }
