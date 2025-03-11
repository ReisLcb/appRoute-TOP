import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importação do Router no projeto

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  router = inject(Router) // Injeção do Router na página 

  constructor() {}

  public abrirAbout(){
    this.router.navigate(['/about']) // Utiliza o router para navegar até a página About
  }

}
