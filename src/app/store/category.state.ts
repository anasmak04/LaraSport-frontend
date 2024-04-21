import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { category } from "../shared/model/category/category";
import { GetCAtegories } from "./category.actions";
import { CategoryServiceService } from "../services/category/category-service.service";
import { CategoryResponse } from "../shared/model/category/category-response";
import { tap } from "rxjs/operators";

@State<category[]>({
  name: "categories",
  defaults: [],
})
@Injectable()
export class CategoriesState {
  constructor(private categoriesService: CategoryServiceService) {}

  @Selector()
  static getCategoriesList(state: category[]): category[] {
    return state;
  }

  @Action(GetCAtegories)
  getCategories({ getState, setState }: StateContext<category[]>) {
    return this.categoriesService.findAll().pipe(
      tap((result: CategoryResponse) => {
        setState(result.categories);
        console.log("Categories fetched", result.categories);
      })
    );
  }
}
