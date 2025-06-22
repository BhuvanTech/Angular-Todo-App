import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { CardComponent } from "../../componenets/shared/card/card.component";
import { CardComponent_1 as CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, CardComponent_1],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
user: any;
selected: any;
onSelectUser() {
throw new Error('Method not implemented.');
}
  // selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
name: any;

  // get property - without using signals (below angular 16)
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar; 
  // }

  onBtnClicked(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
