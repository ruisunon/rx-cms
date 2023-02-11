import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ForgetPasswordComponent,
    UpdatePasswordComponent,
    SettingsComponent,
  ],
})
export class AuthFeatureAuthModule {}
