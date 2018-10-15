import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
    new Recipe('Salad', 'A tasty salad', 'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}