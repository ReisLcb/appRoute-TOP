import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importação do router 

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class AboutPage implements OnInit {

  router = inject(Router) // Injeção do router

  constructor() { }

  ngOnInit() {
  }

  public abrirHome(){
    this.router.navigate(['/home']) // router navega até a página Home
  }

}
