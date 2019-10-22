import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MySpeechService {

  constructor(private tts: TextToSpeech, public toastController: ToastController) { }

  async presentToast(mess) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000,
      color: 'medium'
    });
    toast.present();
  }


  speak(Message) {
    this.tts.speak({
      text: Message,
      locale: 'fr-FR'
    }).then(() => {this.presentToast('Vous êtes connécté'); })
        .catch((reason: any) =>  {
          this.presentToast('Il semblerait qu\'une erreur empêche le fonctionnement');

        });
  }
}
