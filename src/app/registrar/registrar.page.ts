import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrarPage implements OnInit {
  user={
    rut: "",
    nombre: "",
    apellidopaterno: "",
    email: "",
    password: "",
    genero: "",
  }
  
  
  constructor(private router: Router, public toastController: ToastController, private navCtrl: NavController, private userService: UserService) { 

  }

  
  ngOnInit() {
    
  }


  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom'
    });
    toast.present();
  }

  camposValidos(): boolean {

    // Verifica que ningún campo string esté vacío
    const camposValidos = this.user.rut.trim() !== '' &&
           this.user.nombre.trim() !== '' &&
           this.user.apellidopaterno.trim() !== '' &&
           this.user.email.trim() !== '' &&
           this.user.password.trim() !== '' &&
           this.user.genero.trim() !== '';
    console.log('Campos válidos:', camposValidos);
    return camposValidos;
                      
  }
  
  validarRegistro(user: any) {
    if (this.camposValidos()) {
      this.userService.registerUser(user).subscribe({
        next: (response: any) => {
          // Mostrar mensaje de éxito
          this.presentToast('Registro exitoso.', 3000);

          // Redirigir a la página de inicio después de mostrar el mensaje
          setTimeout(() => {
            this.navCtrl.navigateRoot('/home');
          }, 3200); // Esperar un poco más que la duración del toast para garantizar que el usuario vea el mensaje
        },
        error: (error: any) => {
          console.error('Error al registrar el usuario:', error);
          this.presentToast('Error al registrar el usuario. Inténtalo de nuevo.');
        }
      });
    } else {
      this.presentToast('Por favor, rellena todos los campos requeridos.');
    }
  }

  // ...resto del código del componente
}