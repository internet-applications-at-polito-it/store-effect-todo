import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './app.effects';
import { AppComponent } from './app.component';
import { reducers } from './app.reducers';
import { TodosService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   FormsModule,
    StoreModule.forRoot(reducers), // reducers are a map as stateFeature: reduceFunction
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
