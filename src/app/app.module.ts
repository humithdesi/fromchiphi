import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputtestComponent } from './inputtest/inputtest.component';
import { FormsModule } from '@angular/forms';
import { UoctinhchiphiComponent } from './uoctinhchiphi/uoctinhchiphi.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule } from '@angular/material/select';
import { MatInputModule}from '@angular/material/input';
import { MatButtonModule}from '@angular/material/button';
import { ChiphiinbatComponent } from './chiphiinbat/chiphiinbat.component';
import { ChiphibanghieuComponent } from './chiphibanghieu/chiphibanghieu.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Export this function
export function playerFactory(): any {  
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    InputtestComponent,
    UoctinhchiphiComponent,
    ChiphiinbatComponent,
    ChiphibanghieuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    LottieModule.forRoot({ player: playerFactory }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
