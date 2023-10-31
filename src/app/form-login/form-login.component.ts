import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {

  constructor(private serviciosService: ServiciosService, private router: Router) { }


  formData = { email: '', password: '' };

  onSubmit() {
    this.serviciosService.iniciarSesion(this.formData.email, this.formData.password)
      .then(response => {
        this.router.navigate(['/inicio/'])
        this.serviciosService.alertaInicioSesionCorrecto();
        console.log(response)
      })
      .catch(error => {
        this.serviciosService.alertaInicioSesionIncorrecto();
        console.log(error)
      }
      )

  }

  cerrarSesion() {
    this.serviciosService.cerrarSesion();
  }

  ngOnInit() { }

}
