import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent  implements OnInit {

  constructor(private serviciosService: ServiciosService) { }


  formData = {email: '', password: ''};

  onSubmit(){
    this.serviciosService.iniciarSesion(this.formData.email, this.formData.password)
      .then(response => this.serviciosService.alertaInicioSesionCorrecto())
      .catch(error => this.serviciosService.alertaInicioSesionIncorrecto())

  }

  cerrarSesion(){
    this.serviciosService.cerrarSesion();
  }

  ngOnInit() {}

}
