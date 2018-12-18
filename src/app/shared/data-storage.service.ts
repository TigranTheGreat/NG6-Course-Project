import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    let token = this.authService.getToken();

    // return this.httpClient.put(`https://ng-recipe-book-bac28.firebaseio.com/recipes.json`, this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: (new HttpParams()).set('auth', token)
    //   // headers: new HttpHeaders()
    // });

    let req = new HttpRequest('PUT', 'https://ng-recipe-book-bac28.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  getRecipes() {
    let token = this.authService.getToken();

    // return this.httpClient.get<Recipe[]>(`https://ng-recipe-book-bac28.firebaseio.com/recipes.json?auth=${token}`)
    return this.httpClient.get<Recipe[]>(`https://ng-recipe-book-bac28.firebaseio.com/recipes.json?auth=${token}`, {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        map(recipes => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }

          return recipes;
        })
      )
      .subscribe(
        recipes => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
