import { Component } from '@angular/core';
import { User } from "./user"


const USERS = [
  new User("Jack", 25, "jackie", 180, 80),
  new User("Pop", 30, "jackie", 162, 60),
  new User("Yom", 29, "jackie", 170, 50),
  new User("Nick", 40, "jackie", 152, 50),
  new User("Miggie", 45, "jackie", 166, 70),
]

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  
  selectedUser:User;
  users:Array<User>;
  isEditMode:Boolean = false;


  constructor(){
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  checkAge(){
    if(this.selectedUser.isOld())
      alert("You are quite old!")
    else
      alert("Your age is fine.")
  }

  checkHealth(){
    if(this.selectedUser.isHealthy())
      alert("You are healthy")
    else
      alert("You are not healthy")
  }  

}
