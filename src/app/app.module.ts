import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './shared/products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { PassengersModule } from './shared/passengers/passenger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    PassengersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
