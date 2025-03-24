import { Component} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonTextarea } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { ellipseOutline } from ''

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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, CommonModule, FormsModule, NgFor, NgIf, IonCard, IonCardContent,IonCardTitle, IonCardSubtitle, IonCardHeader, IonTextarea],
})
export class HomePage {
  exibirConcluidos:boolean = true

  tasks:Task[] = []
  newTask:string = ''

  // constructor(){
  //   addIcons({ellipseOutline})
  // }

  public mostrarOcultar(){
    this.exibirConcluidos = !this.exibirConcluidos
  }

  get filteredTasks(){
    return this.tasks.filter((item) =>  this.exibirConcluidos || !item.complete)
  }

  public addTask(){
    if(this.newTask.trim()) this.tasks.push({id:Date.now(), titulo: this.newTask.trim(), notas:'', complete: false})
    this.newTask = ''
    console.log(this.tasks);
  }

  public concluir(id:number){
    for (const task of this.tasks) if(id == task.id && !task.complete) task.complete = true
  }
  public excluir(id:number){
    for (const task of this.tasks) if(id == task.id) this.tasks.splice(this.tasks.indexOf(task), 1)
  }
}
