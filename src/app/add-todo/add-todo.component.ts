import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo = new Todo()

  constructor() { }

  ngOnInit(): void {
  }

  save(form:any){
    console.log(form)
  }

}
