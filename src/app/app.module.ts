import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyTextComponent } from './components/body-text/body-text.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { PageStepperComponent } from './components/page-stepper/page-stepper.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyTextComponent,
    ContentCardComponent,
    PageStepperComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
