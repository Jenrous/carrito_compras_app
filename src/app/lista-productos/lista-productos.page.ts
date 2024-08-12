import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons, IonButton, IonMenuButton,
  IonList, IonItem, IonLabel, IonThumbnail, 
 } from '@ionic/angular/standalone';
 import { RouterLink } from '@angular/router';
import { CarritoComprasService } from '../Servicios/CarritoCompras.service';
import { Producto } from '../interfaces/Producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
  standalone: true,
  imports: [RouterLink, IonThumbnail, IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonMenuButton, ]
})
export class ListaProductosPage implements OnInit {

  private carritoComprasService: CarritoComprasService = inject(CarritoComprasService); 
  listaProductos: Producto[]= [];

  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos(){
    this.carritoComprasService.todosProductos().subscribe(data =>{
      this.listaProductos = data.data;
    });
  }

}
