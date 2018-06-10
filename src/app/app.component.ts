import { Component  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, getLightSwitchLightcolor } from './app.reducers';
import { LightSwitchChangeAction } from './app.actions';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <p><input (change)="onLightSwitchChange($event.target.value)"></p>
  <p>Value: {{lightcolor$|async}}</p>
  `
})
export class AppComponent  {
  lightcolor$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.lightcolor$ = store.pipe(select(getLightSwitchLightcolor));
  }

  onLightSwitchChange(color: string) {
    console.dir(color);
    this.store.dispatch( new LightSwitchChangeAction(color));
  }
}
