import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { TodosService } from './app.service';
import { GetTodosSuccess, GetTodosError, TodoActionTypes } from './app.actions';

@Injectable()
export class TodoEffects {
  constructor(private todosService: TodosService, private actions$: Actions) {}
  // Listen for the 'TODOS GET_COLLECTION' action
  @Effect()
  getTodos$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.GET_TODO_COLLECTION),
    switchMap(action =>
      this.todosService.getTodos().pipe(
        map(todos => {
          console.log('getTodos$ effect: ' + JSON.stringify(action));
          return new GetTodosSuccess(todos);
        }),
        catchError(() => of(new GetTodosError()))
      )
    )
  );
}
