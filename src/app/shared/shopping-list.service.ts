import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 ingredientAdded: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
   private ingredients:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange',10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient){
    // debugger;
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}



