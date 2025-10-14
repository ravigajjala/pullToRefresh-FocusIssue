import { Component } from "@angular/core";
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ion-select',
  templateUrl: './ion-select.page.html',
  styleUrls: ['ion-select.page.scss'],
  imports: [IonSelect, IonSelectOption],
})

export class IonSelectPage {

  public monthsList = [
    {
      id: '1',
      name: 'January',
      value: 'january'
    },
    {
      id: '2',
      name: 'Febraury',
      value: 'febraury'
    },
    {
      id: '3',
      name: 'March',
      value: 'march'
    },
    {
      id: '4',
      name: 'April',
      value: 'april'
    },
    {
      id: '5',
      name: 'May',
      value: 'may'
    },
    {
      id: '6',
      name: 'June',
      value: 'june'
    },
    {
      id: '7',
      name: 'July',
      value: 'july'
    },
    {
      id: '8',
      name: 'August',
      value: 'august'
    },
    {
      id: '9',
      name: 'September',
      value: 'september'
    },
    {
      id: '10',
      name: 'October',
      value: 'cctober'
    },
    {
      id: '11',
      name: 'November',
      value: 'november'
    },
    {
      id: '12',
      name: 'December',
      value: 'december'
    }
  ]

  constructor() {}

  ngOnInit() {}

}