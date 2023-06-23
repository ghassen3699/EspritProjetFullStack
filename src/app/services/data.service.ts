import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTodoData(){
    return this.http.get<Todo[]>('http://localhost:3000/todoData')
  }

  getSingleData(id:number){
    return this.http.get<Todo>('http://localhost:3000/todoData/'+id)
  }

  postTodo(todo:Todo){
    return this.http.post('http://localhost:3000/todoData',todo)
  }
}
