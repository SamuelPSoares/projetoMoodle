import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

@Injectable()
export class MoodleService {
  urlAPI = ' https://lms.infnet.edu.br/moodle/login/token.php';
  urlAPI2 = 'https://lms.infnet.edu.br/moodle/webservice/rest/server.php'

  constructor(public web: HttpClient , private localStor : Storage) {
  }

  executaLogin(usuario, senha) {
    let formulario = new FormData();
    formulario.append('username', usuario);
    formulario.append('password', senha);
    formulario.append('service', 'moodle_mobile_app')

    return this.web.post(this.urlAPI, formulario);
  }
  trazerDadosUsuario(token) {
    let formulario = new FormData();
    formulario.append('wstoken', token);
    formulario.append('moodlewsrestformat', 'json');
    formulario.append('wsfunction', 'core_webservice_get_site_info');

    return this.web.post(this.urlAPI2,formulario);
  }

  trazerMaterias(token, id){
    let formulario = new FormData();
    formulario.append('wstoken', token);
    formulario.append('moodlewsrestformat', 'json');
    formulario.append('wsfunction', 'core_enrol_get_users_courses')
    formulario.append('userid', id);
    return this.web.post(this.urlAPI2,formulario);
  }
  verificarToken(){
    if (this.localStor.get('token')){
      return true
    }
    return false
  }
  salvaToken(token){
    return this.localStor.set('token', token)
  }

  retornaToken(){
    return this.localStor.get('token');
  }

  salvarID(dadosUsuario){
    return this.localStor.set('usuario', dadosUsuario)
  }

  pegarID(){
    return this.localStor.get('usuario')

  }

  criarMaterias(materias){
    return this.localStor.set('materia', materias)

  }
  pegarMaterias(){
    return this.localStor.get('materia')
  }


}

