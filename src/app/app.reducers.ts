import { ActionReducerMap, Action } from '@ngrx/store';
import { LightSwitchActionTypes, LightSwitchActions } from './app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// I can remove LightSwitch prefix if moved in a module
// import * as fromLightSwitch from 'light-switch.reducers';
// reducers becomes
// { lightSwitch: fromLightSwitch.reducer }
// selectors
// fromLightSwitch.getLightcolor

export interface AppState {
  lightSwitch: LightSwitchState;
}
export interface LightSwitchState {
  lightcolor: string;
}

const initialLightSwitchState = {
    lightcolor: 'off'
};
const initialAppState: AppState = {
    lightSwitch: initialLightSwitchState
};

// it is a MAP object
// reducers properties must match with AppState properties
export const reducers: ActionReducerMap<AppState> = {
  lightSwitch: lightSwitchReducer
};

// reducer called with a scoped state (not App, but LightSwitch)
function lightSwitchReducer(state: LightSwitchState = initialLightSwitchState, action: LightSwitchActions): LightSwitchState {
    console.log('reducer - ' +
      'state lightcolor: ' + JSON.stringify(state) + ', ' +
      'action: ' + JSON.stringify(action)
    );
    switch (action.type) {
        case LightSwitchActionTypes.CHANGE:
            return Object.assign({}, state, {lightcolor: action.payload});
        default:
            return state;
    }
}

export const getLightSwitchState = createFeatureSelector<LightSwitchState>('lightSwitch');

export const getLightSwitchLightcolor = createSelector(
    getLightSwitchState,
    (state: LightSwitchState) => {
        console.log('getLightSwitchLightcolor: ' + JSON.stringify(state));
        return state.lightcolor;
    }
  );


