import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  constructor(private serviciosService: ServiciosService) { }

  libros: any;

  // Obtener libros
  async readLibros() {
    this.libros = await this.serviciosService.getLibros();
  }

  libro: any;

  ngOnInit() {
    this.readLibros();

    this.serviciosService.hacerQuery('LOS SUEÑOS DEL CYBORG');
  }


}
