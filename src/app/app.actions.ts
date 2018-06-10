import { Action } from '@ngrx/store';
import { Todo } from './app.model';

export enum TodoActionTypes {
    GET_TODO_COLLECTION = '[Todo] Get collection',
    GET_TODO_COLLECTION_SUCCESS = '[Todo] Get collection success',
    GET_TODO_COLLECTION_ERROR = '[Todo] Get collection error',
    ADD_TODO_ITEM = '[Todo] Add item',
}

export class GetTodosAction implements Action {
  readonly type = TodoActionTypes.GET_TODO_COLLECTION;
}

export class GetTodosError implements Action {
  readonly type = TodoActionTypes.GET_TODO_COLLECTION_ERROR;
}

export class GetTodosSuccess implements Action {
  readonly type = TodoActionTypes.GET_TODO_COLLECTION_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO_ITEM;
  constructor(public payload: string) {}
}

export type TodoActions = GetTodosAction | AddTodoAction | GetTodosSuccess | GetTodosError;

