import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import { RadioService } from './-services/radio.service';

import { RadioInterceptor } from './-interceptors/radio.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RadioListComponent } from './components/radio-list/radio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpModule
  ],
  providers: [
    RadioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RadioInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
