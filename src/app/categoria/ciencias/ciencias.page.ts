import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-ciencias',
  templateUrl: './ciencias.page.html',
  styleUrls: ['./ciencias.page.scss'],
})
export class CienciasPage implements OnInit {

  constructor(private serviciosService: ServiciosService, private router: Router) {
    this.center = { lat: -33.437423, lng: -70.6426087 };
  }

  zoom = 18;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
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
    this.libros = await this.serviciosService.getLibrosCiencias();
  }


  ngOnInit() {
    this.readLibros()
    this.serviciosService.ngOnInit()
  }

}
