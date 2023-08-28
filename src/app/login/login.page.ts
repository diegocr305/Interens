import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPage } from '../user/user.page';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserPage],
})
export class LoginPage implements OnInit {

  user={
    usuario: "",
    password: ""
  }

  constructor(private userService: UserPage,private router: Router) { 
    
  }

  ngOnInit() {
  }

  ingresar(){
    for(let i = 0; i < this.userService.userList.length; i++){
      if(this.userService.userList[i].email === this.user.usuario && this.userService.userList[i].password == this.user.password){
        console.log(this.userService.userList[i]);
        let navigationExtras: NavigationExtras = {
          state: {
            user: this.userService.userList[i]
          }
        }
        this.router.navigate(['/home'], navigationExtras);
        break;
      }
    }
  }

}
