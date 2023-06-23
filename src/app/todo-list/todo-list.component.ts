import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[] = []
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
    this.DataService.getTodoData().subscribe((data) => this.todoList = data)
  }

}
