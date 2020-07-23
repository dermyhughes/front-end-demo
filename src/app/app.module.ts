import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyTextComponent } from './body-text/body-text.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { PageStepperComponent } from './page-stepper/page-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyTextComponent,
    ContentCardComponent,
    PageStepperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
