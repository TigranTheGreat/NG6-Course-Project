import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() routeChange = new EventEmitter<string>();

  onRouteRecipes () {
    this.routeChange.emit('recipes')
  }
  
  onRouteShoppingList () {
    this.routeChange.emit('shopping')
  }
}