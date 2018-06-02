import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {PesquisaPage} from "./pesquisa";
import {LoginPage} from "../login/login";

@NgModule({
  declarations: [
   PesquisaPage,
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaPage),
  ],
})
export class PesquisaPageModule {}
