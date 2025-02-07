import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons,IonMenuButton,
  IonIcon, IonFooter
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons,IonMenuButton,
    IonIcon, IonFooter
   ]
})
export class CarritoComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
