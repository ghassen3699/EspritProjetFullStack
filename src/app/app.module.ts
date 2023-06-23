import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';

const ROUTERS: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/:id', component: TododetailsComponent },
  { path: 'Add', component: AddTodoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TododetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
