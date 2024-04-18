// import { Injectable } from '@angular/core';
// import { Actions, ofType, createEffect } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { TagsServiceService } from '../services/tags/tags-service.service';
// import * as TagActions from './tag.action';

// @Injectable()
// export class TagEffects {

//   loadTags$ = createEffect(() => this.actions$.pipe(
//     ofType(TagActions.loadTags),
//     mergeMap(() => this.tagsService.findAll()
//       .pipe(
//         map(tags : any => TagActions.loadTagsSuccess({ tags })),
//         catchError(error => of(TagActions.loadTagsFailure({ error })))
//       ))
//   ));

//   constructor(
//     private actions$: Actions,
//     private tagsService: TagsServiceService
//   ) {}
// }
