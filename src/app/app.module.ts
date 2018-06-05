import { HttpModule } from '@angular/http';
import { DataService } from './services/twitter-data.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    GridModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
