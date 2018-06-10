import { Injectable } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

@Injectable()
export class TodosService {

  getTodos() {
    const todos = [{id: 1, title: 'Learn ngrx/store', completed: true}, {
      id: 2,
      title: 'Learn ngrx/effects',
      completed: false,
    }];
    console.log('getTodos service: ' + JSON.stringify(todos));
    return of(todos).pipe(delay(500));
  }

  /*
  addTodo( title ) {
    return timer(2000).pipe(mapTo({id: Math.random(), title, completed: false}));
  }
  */

  /*
  getVisibleTodos( todos, filter ) {
    if ( filter === 'SHOW_ALL' ) {
      return todos;
    } else if ( filter === 'SHOW_COMPLETED' ) {
      return todos.filter(t => t.completed);
    } else {
      return todos.filter(t => !t.completed);
    }
  }
  */

}
