import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { PrivateModule } from './private/private.module';
import {AuthGuard} from './guard/auth.guard';
import { AuthPrivateGuard } from './guard/auth-private.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrivateModule
  ],
  providers: [AuthGuard, AuthPrivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
