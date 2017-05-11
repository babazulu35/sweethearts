import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { ButtonComponent } from './components/button/button.component';
import { MainComponent } from './components/main/main.component';
import { SelectionPillComponent } from './components/selection-pill/selection-pill.component';
import { SelectionRadioComponent } from './components/selection-radio/selection-radio.component';
import { SelectionSelectboxComponent } from './components/selection-selectbox/selection-selectbox.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeSliderComponent,
    ButtonComponent,
    MainComponent,
    SelectionPillComponent,
    SelectionRadioComponent,
    SelectionSelectboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
