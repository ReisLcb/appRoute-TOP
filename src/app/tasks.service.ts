import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'

@Injectable({
  providedIn: 'root'
})

export interface Task{
  readonly id:number
  titulo:string
  notas:string
  complete:boolean
}

export class TasksService {

    exibirConcluidos:boolean = true

  tasks:Task[] = []
  newTask:string = ''

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
    for (const task of this.tasks){
       if(id == task.id){
        task.complete = !task.complete
       }
    }
  }
  public excluir(id:number){
    for (const task of this.tasks) if(id == task.id) this.tasks.splice(this.tasks.indexOf(task), 1)
  }

  constructor() { }
}
