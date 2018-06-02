import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {HomePage} from "../pesquisa/pesquisa";

@NgModule({
  declarations: [
    LoginPage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
