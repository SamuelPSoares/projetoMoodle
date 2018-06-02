            import { Component } from '@angular/core';
            import { IonicPage, NavController, NavParams } from 'ionic-angular';
            import {MoodleService} from "../../providers/moodle/moodle";
            import {HttpClient} from "@angular/common/http";



            @IonicPage()
            @Component({selector: 'page-resultado',
              templateUrl: 'dashboard.html',
              providers: [MoodleService]
            })


            export class DashboardPage {
              //parametros
              toke: any;
              id: any;
              user:any;

              //referências
              userid: any;
              materias: any;
              pic: any;
              nome: any;
              idmat: any;
              dat: any;

              constructor(public navCtrl: NavController,
                          public navParams: NavParams,
                          public http: HttpClient,
                          public service: MoodleService) {

              //  this.retornaDadosUsuario();


              }

              // retornaDadosUsuario() {
              //     this.service.retornaToken().then((data) => {
              //       let dat = JSON.parse(data).token;
              //
              //     console.log(dat);
              //
              //     this.service.trazerDadosUsuario(dat).subscribe(ret =>  {
              //
              //       console.log('dados do usuario',ret);
              //       let usuario = ret
              //             this.user= usuario.userid;
              //             this.pic = usuario.userpictureurl;
              //     })
              //   })
              // }

              trazerMaterias(){

                this.service.trazerMaterias(this.dat ,this.userid).subscribe(mat => {
                  console.log(mat);
                  this.materias = mat;

                  this.idmat = this.materias.id;
                  console.log(this.idmat);

            })
          }
         }











