import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'

export interface User{
  nome:string
  senha:string
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private USER_KEY = "user" 
  exibirConcluidos:boolean = true
  
  async cadastrarUsuario(user:User):Promise<void>{
    const users = await this.getUsers() || [] 

    users.push(user) 

    await Preferences.set({
      key: this.USER_KEY, 
      value: JSON.stringify(user)
    })
  }

  async getUsers():Promise<User[]>{ 
    const { value } = await Preferences.get({key: this.USER_KEY})

    return value ? JSON.parse(value) : []  
  }

  constructor() { }
}
