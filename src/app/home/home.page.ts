import { Component} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { ellipseOutline } from ''

interface Task{
  readonly id:number
  titulo:string
  estado:'Cadastrada' | 'Cancelada' | 'Concluída'
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, CommonModule, FormsModule, NgFor, NgIf, IonCard, IonCardContent,IonCardTitle, IonCardSubtitle, IonCardHeader],
})
export class HomePage {

  tasks:Task[] = []
  newTask:string = ''

  // constructor(){
  //   addIcons({ellipseOutline})
  // }

  public addTask(){
    if(this.newTask.trim()) this.tasks.push({id:Date.now(), titulo: this.newTask.trim(), estado:'Cadastrada'})
    this.newTask = ''
    console.log(this.tasks);
  }

  public concluir(id:number){
    for (const task of this.tasks) if(id == task.id && task.estado == 'Cadastrada') task.estado = "Concluída"
  }

  public cancelar(id:number){
    for (const task of this.tasks) if(id == task.id && task.estado == 'Cadastrada') task.estado = "Cancelada"
  }

  public excluir(id:number){
    for (const task of this.tasks) if(id == task.id && task.estado == 'Cancelada') this.tasks.splice(this.tasks.indexOf(task), 1)
  }
}
