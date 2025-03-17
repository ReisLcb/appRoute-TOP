import { Component} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonList, IonLabel } from '@ionic/angular/standalone';

interface Task{
  readonly id:number
  titulo:string
  complete:boolean
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, CommonModule, FormsModule, NgFor, IonList, IonLabel],
})
export class HomePage {

  tasks:Task[] = []
  newTask:string = ''

  public addTask(){
    if(this.newTask.trim()) this.tasks.push({id:Date.now(), titulo: this.newTask.trim(), complete:false})
    this.newTask = ''
    console.log(this.tasks);
  }
}
