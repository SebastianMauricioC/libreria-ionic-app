import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private serviciosService: ServiciosService, private router: Router,) {
    this.center = { lat: -33.437423, lng: -70.6426087 };
  }

  zoom = 14;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 28,
    minZoom: 8,
  };


  // Cierra la sesión y redirige a el inicio de sesión
  cerrarSesionBoton() {
    this.serviciosService.cerrarSesion()
      .then(response => {
        this.serviciosService.alertaSesiónCerradaCorrecto()
        this.router.navigate(['/login/']);
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  // Alertas de botones
  public alertButtons = [
    {
      text: 'No',
      role: 'no',
      handler: () => {
        console.log('Alerta canceleda');
      },
    },
    {
      text: 'Cerrar sesión',
      role: 'confirmar',
      handler: () => {
        this.cerrarSesionBoton();
        console.log('Alerta confirmada');
      },
    },
  ];

  formData = { nombre: '', autor: '', categoria: '', precio: '', stock: '', favorito: '', imagen: '' };

  // Agregar libro a base de datos
  async agregarLibro() {
    console.log(this.formData)
    const response = this.serviciosService.agregarLibro(this.formData);
    console.log(response);
  }

  libros: any;

  // Obtener libros
  async readLibros() {
    this.libros = await this.serviciosService.getLibros();
  }


  ngOnInit() {
    this.readLibros()
    this.serviciosService.ngOnInit();
    this.serviciosService.agregarIonic();
    this.serviciosService.set("name", "Sebastián")
    this.serviciosService.obtener();
  }


}
