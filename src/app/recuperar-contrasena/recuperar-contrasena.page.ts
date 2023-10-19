import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPage } from '../user/user.page';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserPage],
})
export class RecuperarContrasenaPage implements OnInit {

  user={
    usuario: ""
  }

  constructor(private userService: UserPage, private router: Router) { }

  ngOnInit() {
  }


  Verificar(){
    this.router.navigate(['/recuperar-contrasena-verificado']);
     for(let i = 0; i < this.userService.userList.length; i++){
        console.log(this.user.usuario);
       //console.log(this.userService.userList[i].email)
       if(this.userService.userList[i].email === this.user.usuario){
         console.log(this.user.usuario);
         this.router.navigate(['/recuperar-contrasena-verificado']);
       }else{
         console.log("error")
       }
     }
  }
}
