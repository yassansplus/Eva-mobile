import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements OnInit {

  lookingAboutSomeone = false;
  sentimentAnalyse = false;

  constructor() { }

  ngOnInit() {
  }

  onSentimentAnalyse() {
    this.lookingAboutSomeone = false;
    this.sentimentAnalyse = true;
  }
  onLookingAboutSomeone() {
    this.lookingAboutSomeone = true;
    this.sentimentAnalyse = false;
  }

  onSubmitForm(form: NgForm) {
  if (this.lookingAboutSomeone) {
    console.log('looking about someone');
    console.log(form.value);
  }
  if (this.sentimentAnalyse) {
    console.log('sentiment Analyse');
  }

  }


}
