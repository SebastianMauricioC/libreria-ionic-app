import { Component } from '@angular/core';

import { ServiciosService } from '../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormComponentComponent {

  constructor(private serviciosService: ServiciosService, private router: Router) { }

  formData = { email: '', password: '', passwordDos: '', genero: '', };

  onSubmit() {
    console.log('Datos enviados:', this.formData);
    if (this.formData.email == '' || this.formData.genero == '' || this.formData.password == '') {
      this.serviciosService.alertaRegistroIncorrecto();
    } else if (this.formData.password == this.formData.passwordDos) {
      this.serviciosService.registrar(this.formData.email, this.formData.password)
        .then(response => {
          console.log("Usuario registrado correctamente 💹", response);
          this.router.navigate(['/inicio/']);
          this.serviciosService.alertaRegistroCorrecto();
        })
        .catch(error => {
          this.serviciosService.alertaRegistroIncorrecto()
          console.log(error)
        });
    } else {
      this.serviciosService.alertaRegistroIncorrectoPassword();
    }
    console.log(this.formData.email, this.formData.password)

  }
}
