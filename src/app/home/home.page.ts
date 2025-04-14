import { Component} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonTextarea, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipseOutline, checkmarkCircle, eye, eyeOff, trash } from 'ionicons/icons'
import { UsersService } from '../service/task.service'

interface Usuario{
  nome:string
  senha:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, CommonModule, FormsModule, NgFor, NgIf, IonCard, IonCardContent,IonCardTitle, IonCardSubtitle, IonCardHeader, IonTextarea],
})
export class HomePage {
  nome:string = ""
  senha:string = ""

  adicionarUsuario(){
    cadastrar
  }

  constructor(){
    addIcons({ ellipseOutline, checkmarkCircle, eye, eyeOff, trash })
  }
}
