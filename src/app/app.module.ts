import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { FormsModule } from '@angular/forms';
import { PhoneBoookTabComponent } from './components/phone-boook-tab/phone-boook-tab.component';
import { PhoneEditComponent } from './components/phone-edit/phone-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    PhoneFormComponent,
    PhoneBoookTabComponent,
    PhoneEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
