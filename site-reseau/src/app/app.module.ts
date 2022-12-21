import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { AppPageComponent } from './app-page/app-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    IndexPageComponent,
    AppPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
