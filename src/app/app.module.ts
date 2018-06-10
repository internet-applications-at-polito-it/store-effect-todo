import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { reducers } from './app.reducers';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   FormsModule,
    StoreModule.forRoot(reducers), // reducers are a map as stateFeature: reduceFunction
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
