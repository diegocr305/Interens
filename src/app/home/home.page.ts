import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  userInfo: any | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfo = this.router.getCurrentNavigation()?.extras.state?.['user'];
  }
  
  goToProductosPage() {
    this.router.navigate(['/productos']);  // Asumiendo que la ruta a productos.page es '/productos'
  }
  

  ngOnInit() {
    console.log(this.userInfo);
  }
}
