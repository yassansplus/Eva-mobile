import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MySpeechService} from '../service/my-speech.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nom: string;
  prenom: string;
  constructor(private mySpeechService: MySpeechService, private router: Router) {
    this.nom = '';
    this.prenom = '';
  }


  onLogin() {
    console.log('ok');
  }



  onSubmitForm(form: NgForm) {

    console.log(form.value);
    if (form.value.prenom === 'Yassine' && form.value.nom === 'Bousaidi') {
        this.mySpeechService.speak('Bonjour Monsieur.');
        this.router.navigate(['/entering']);
    }
  }



}
