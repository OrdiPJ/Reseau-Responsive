import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageComponent } from './app-page/app-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: 'app', component: AppPageComponent },
  { path: '', component: IndexPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
