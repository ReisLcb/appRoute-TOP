import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'

export interface Task{
  readonly id:number
  titulo:string
  notas:string
  complete:boolean
}


@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private TASK_KEY = "tasks" // Key que será atrelada ao vetor
  exibirConcluidos:boolean = true
  
  async addTask(task:Task):Promise<void>{
    const tasks = await this.getTasks() || [] // Chama as tasks salvas com  a key "Tasks"; retorna um vetor com as tasks

    tasks.push(task) // Insere a ultima task no vetor

    await Preferences.set({ // Seta o vetor
      key: this.TASK_KEY, // Sobescreve a key do vetor a ser sobescrito
      value: JSON.stringify(task) // Sobescreve o vetor anterior pelo novo vetor com a task adicionada
    })
    // Semelhante ao localStorage
  }

  async getTasks():Promise<Task[]>{ // Como é uma Promisse, retornará as tasks agora, no futuro ou nunca
    const { value } = await Preferences.get({key: this.TASK_KEY}) // Retorna o elemento que tem uma chave específica atrelada à ele

    return value ? JSON.parse(value) : []  // Retorna o vetor com a chave atrelada; se estiver nulo, retona um vetor vazio
  }
  
  async filteredTasks(){
    const tasks = await this.getTasks() || []
    
    return tasks.filter((item) =>  this.exibirConcluidos || !item.complete)
  }
  


  // tasks:Task[] = []
  // newTask:string = ''

  // public mostrarOcultar(){
  //   this.exibirConcluidos = !this.exibirConcluidos
  // }


  // public addTask(){
  //   if(this.newTask.trim()) this.tasks.push({id:Date.now(), titulo: this.newTask.trim(), notas:'', complete: false})
  //   this.newTask = ''
  //   console.log(this.tasks);
  // }

  // public concluir(id:number){
  //   for (const task of this.tasks){
  //      if(id == task.id){
  //       task.complete = !task.complete
  //      }
  //   }
  // }
  // public excluir(id:number){
  //   for (const task of this.tasks) if(id == task.id) this.tasks.splice(this.tasks.indexOf(task), 1)
  // }

  constructor() { }
}
