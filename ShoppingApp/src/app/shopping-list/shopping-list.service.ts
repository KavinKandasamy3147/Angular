import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredentsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('orange', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredentsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients);
    this.ingredentsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredentsChanged.next(this.ingredients.slice());
  }
}
