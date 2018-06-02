import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ListPage} from "../list/list";
import {LoginPage} from "../login/login";
import{MoodleService} from "../../providers/moodle/moodle";
import {ProvedorProvider} from "../../providers/provedor/provedor";
import {DashboardPage} from "../dashboard/dashboard";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'pesquisa.html',
  providers: [ProvedorProvider]
})
export class PesquisaPage {


  buscaLivro: any;
  buscaAutor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
              protected provedor  : ProvedorProvider) {


  }

  irLoginPage(){
        this.navCtrl.push(LoginPage)

    }

  buscarLivros() {
      this.provedor.exibeLivrosPorNome(this.buscaLivro).subscribe(data =>{
        console.log('livro ')
        this.navCtrl.push(ListPage);

      })
    }

   buscarAutor(){

        this.navCtrl.push(ListPage, {buscarAutor: this.buscarAutor
        });

    }
}
