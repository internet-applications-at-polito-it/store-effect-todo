import { Action } from '@ngrx/store';

export enum LightSwitchActionTypes {
    CHANGE = '[LightSwitch] Change',
    RESET = '[LightSwitch] Reset',
}

export class LightSwitchChangeAction implements Action {
  readonly type = LightSwitchActionTypes.CHANGE;
  constructor(public payload: string) {}
}

export class LightSwitchResetAction implements Action {
  readonly type = LightSwitchActionTypes.RESET;
}

export type LightSwitchActions = LightSwitchChangeAction | LightSwitchResetAction;

