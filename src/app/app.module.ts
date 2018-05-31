import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresidentsComponent } from './presidents/presidents.component';
import { HttpModule } from '@angular/http';
import { PresidentService } from './services/president.service';
import { SortPipe } from './presidents/sortpipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PresidentsComponent, 
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OrderModule
  ],
  providers: [PresidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
