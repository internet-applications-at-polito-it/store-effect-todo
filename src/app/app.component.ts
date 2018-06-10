import { Component, OnInit  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoState } from './app.reducers';
import { GetTodosAction } from './app.actions';
import { FormsModule } from '@angular/forms';
import { Todo } from './app.model';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="todo$ | async as todos">
  <p *ngIf="todos.pending">Spinner...</p>
  <ul>
    <li *ngFor="let todo of todos.data">{{todo.title}}</li>
  </ul>
  <p *ngIf="todos.error">Error: {{todos.error}}</p>
  {{ todos | json }}
  </div>
  `
})
export class AppComponent implements OnInit {
  todo$: Observable<TodoState>;

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    this.store.dispatch(new GetTodosAction());
    this.todo$ = this.store.select('todo');
  }

}
