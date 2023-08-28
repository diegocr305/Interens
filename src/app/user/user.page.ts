import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

  userList:{email: string, password: string} [] = [
    {email: 'jon', password: '123'},
    {email: 'and', password: '123'}
  ];

  user={
    usuario: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.userList);
    
  }

  actualizarContrasena(username: string, newPassword: string){
    for(let i = 0; i < this.userList.length; i++){
      console.log(username);  
      console.log(newPassword); 
       
      if(this.userList[i].email === username){
        console.log(this.userList[i]);   
        this.userList[i].password = newPassword;   
        console.log(this.userList[i]);  
        
        break;
      }
         
    }
  }



  

}
