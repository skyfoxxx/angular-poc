import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateRoutingModule } from './private-routing.module';
import { BookingComponent } from './booking/booking.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [PrivateComponent, ProfileComponent, NavComponent, BookingComponent, FaqComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
