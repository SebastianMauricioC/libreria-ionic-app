import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormComponentComponent{

  constructor(private alertController: AlertController, private serviciosService: ServiciosService, private router:Router) { }

  async alertaRegistroCorrecto() {
    console.log('Correcto ✅')

    const alert = await this.alertController.create({
      header: 'Correcto',
      subHeader: 'Se ha registrado correctamente',
      message: '¡Ahora puede iniciar sesión!',
      buttons: ['Aceptar'],
      mode: 'ios',
    });


    await alert.present();
  }

  async alertaRegistroIncorrecto() {
    console.log('Incorrecto ❌')
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Ha habido un problema',
      message: 'Por favor, rellene los campos correctamente',
      buttons: ['Aceptar'],
      mode: 'ios',
    });


    await alert.present();
  }

  async alertaRegistroIncorrectoPassword() {
    console.log('Incorrecto ❌')
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Ha habido un problema',
      message: 'Las dos contraseñas no coinciden, por favor, ingréselas nuevamente',
      buttons: ['Aceptar'],
      mode: 'ios',
    });


    await alert.present();
  }

  formData = { email: '', password: '', passwordDos: '', genero: '', };

  onSubmit() {
    // Lógica de envío de datos
    console.log('Datos enviados:', this.formData);
    // Modificar validaciones con requerimientos de Firebase
    if (this.formData.email == '' || this.formData.genero == '' || this.formData.password == '') {
      this.alertaRegistroIncorrecto();
    } else if (this.formData.password != this.formData.passwordDos) {
      this.alertaRegistroIncorrectoPassword();
    } else {
      this.alertaRegistroCorrecto();
      this.serviciosService.registrar(this.formData.email, this.formData.password)
      .then(response =>{
        console.log("Usuario registrado correctamente 💹");
        this.router.navigate(['/login/']);
      })
      .catch(error => console.log(error));
    }
    console.log(this.formData.email, this.formData.password)

  }
}
