
import { Component, inject } from '@angular/core';
import {
  RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent,
  IonRefresher, IonRefresherContent, IonList, IonButton, LoadingController, IonSelect, IonSelectOption, IonItem, IonInput, IonIcon
} from '@ionic/angular/standalone';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, MessageComponent, IonButton, IonSelect,
    IonSelectOption, IonItem, IonList, IonInput, IonIcon],
})
export class HomePage {
  private data = inject(DataService);
  constructor(private loadingController: LoadingController) { }

  refresh(ev: any) {
    this.present();
    setTimeout(async () => {
      await this.dismiss();
      setTimeout(() => {
        (ev as RefresherCustomEvent).detail.complete();
      }, 500);
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  async present() {
    const loadingElement = await this.loadingController.create({
      cssClass: 'custom-loading',
      spinner: 'crescent'
    });
    await loadingElement.present();
  }

  async dismiss() {
    await this.loadingController.dismiss();

  }
}
