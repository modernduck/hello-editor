import { Component } from '@angular/core';
import { User } from "./user"

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  user:User;
  isEditMode:Boolean = false;


  constructor(){
    this.user = new User();
    this.user.name = "sompop"
    this.user.age = 29 
    this.user.height = 165
    this.user.weight = 66
  }

  checkAge(){
    if(this.user.isOld())
      alert("You are quite old!")
    else
      alert("Your age is fine.")
  }

}
