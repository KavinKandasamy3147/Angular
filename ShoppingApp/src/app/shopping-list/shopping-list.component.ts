import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients!: Ingredient[];
  private igChangeSub!: Subscription;

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredentsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }
  constructor(private slService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
