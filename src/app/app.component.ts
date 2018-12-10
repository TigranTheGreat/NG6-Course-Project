import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCB8WdWitDW_7xOUJPk9TyAs5jX-U3ewcQ",
      authDomain: "ng-recipe-book-bac28.firebaseapp.com"
    })
  }
}
