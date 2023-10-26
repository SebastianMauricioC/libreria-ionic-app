import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

import { ServiciosService } from '../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormComponentComponent {

  constructor(private alertController: AlertController, private serviciosService: ServiciosService, private router: Router) { }

  formData = { email: '', password: '', passwordDos: '', genero: '', };

  onSubmit() {
    // Lógica de envío de datos
    console.log('Datos enviados:', this.formData);
    // Modificar validaciones con requerimientos de Firebase
    if (this.formData.email == '' || this.formData.genero == '' || this.formData.password == '') {
      this.serviciosService.alertaRegistroIncorrecto();
    } else if (this.formData.password == this.formData.passwordDos) {
      this.serviciosService.registrar(this.formData.email, this.formData.password)
        .then(response => {
          this.serviciosService.alertaRegistroCorrecto();
          console.log("Usuario registrado correctamente 💹");
          this.router.navigate(['/login/']);
        })
        .catch(error => this.serviciosService.alertaRegistroIncorrecto());
    } else{
      this.serviciosService.alertaRegistroIncorrectoPassword();
    }
    console.log(this.formData.email, this.formData.password)

  }
}
