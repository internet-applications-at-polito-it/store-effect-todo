import { ActionReducerMap, Action } from '@ngrx/store';
import { TodoActionTypes, TodoActions } from './app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './app.model';

// I can remove Todo prefix if moved in a module
// import * as fromTodo from 'light-switch.reducers';
// reducers becomes
// { todo: fromTodo.reducer }
// selectors
// fromTodo.getLightcolor

export interface AppState {
  todo: TodoState;
}
export interface TodoState {
  data: Array<Todo>;
  pending: boolean;
  error: string;
}

const initialTodoState = {
    data: [],
    pending: false,
    error: null
};
const initialAppState: AppState = {
    todo: initialTodoState
};

// it is a MAP object
// reducers properties must match with AppState properties
export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer
};

// reducer called with a scoped state (not App, but Todo)
function todoReducer(state: TodoState = initialTodoState, action: TodoActions): TodoState {
    console.log('reducer - ' +
      'state title: ' + JSON.stringify(state) + ', ' +
      'action: ' + JSON.stringify(action)
    );
    switch (action.type) {
        case TodoActionTypes.GET_TODO_COLLECTION:
            // mark as pending because of async request as side-effect
            return Object.assign({}, state, {pending: true, error: null, data: []});
        case TodoActionTypes.GET_TODO_COLLECTION_SUCCESS:
            return Object.assign({}, state, {data: action.payload, pending: false});
        case TodoActionTypes.GET_TODO_COLLECTION_ERROR:
            return Object.assign({}, state, {pending: false, error: 'Error'});
        default:
            return state;
    }
}

export const getTodoState = createFeatureSelector<TodoState>('todo');

export const getTodos = createSelector(
    getTodoState,
    (state: TodoState) => {
        console.log('getTodos selector: ' + JSON.stringify(state));
        return state.data;
    }
  );


