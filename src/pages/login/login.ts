  import { Component } from '@angular/core';
  import { IonicPage, NavController, NavParams } from 'ionic-angular';
  import {HttpClient} from "@angular/common/http";
  import {MoodleService} from "../../providers/moodle/moodle";
  import {DashboardPage} from "../dashboard/dashboard";




  @IonicPage()
  @Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [MoodleService],

  })
  export class LoginPage {

    usuario: any
    senha: any
    tok: any;
    private tokok: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public service: MoodleService, public http: HttpClient) {

    }

    logarApi() {
      this.service.executaLogin(this.usuario, this.senha).subscribe(retornoOk => {
        console.log(retornoOk);
        this.tok =(JSON.stringify(retornoOk));
        let x = this.service.salvaToken(this.tok)
        console.log(x);
         if (this.tok !=null){
          this.navCtrl.push(DashboardPage);

        }else {
          console.log('erro ao logar')
        }
      })
    }
  }
