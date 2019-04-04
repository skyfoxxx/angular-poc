import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { BookingComponent } from './booking/booking.component';
import { FaqComponent } from './faq/faq.component';
import { AuthPrivateGuard } from '../guard/auth-private.guard';

const Routes = [
  {
    path: 'private',
    component: PrivateComponent, canActivate : [AuthPrivateGuard],
    children: [
      { path: '', redirectTo: 'private/profile', pathMatch: 'full' },
      { path: 'private/profile', component: ProfileComponent },
      { path: 'private/booking', component: BookingComponent },
      { path: 'private/faq', component: FaqComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
