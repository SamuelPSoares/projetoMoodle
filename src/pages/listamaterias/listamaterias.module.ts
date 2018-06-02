import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListamateriasPage } from './listamaterias';

@NgModule({
  declarations: [
    ListamateriasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListamateriasPage),
  ],
})
export class ListamateriasPageModule {}
