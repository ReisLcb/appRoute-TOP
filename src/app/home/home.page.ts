import { Component} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonTextarea, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';


 import { ellipseOutline, checkmarkCircle, eye, eyeOff, trash } from 'ionicons/icons'

interface Task{
  readonly id:number
  titulo:string
  notas:string
  complete:boolean
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, CommonModule, FormsModule, NgFor, NgIf, IonCard, IonCardContent,IonCardTitle, IonCardSubtitle, IonCardHeader, IonTextarea],
})
export class HomePage {
  constructor(){
    addIcons({ ellipseOutline, checkmarkCircle, eye, eyeOff, trash })
  }
}
