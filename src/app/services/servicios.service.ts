import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private auth: Auth, private alertController: AlertController) { }

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

  registrar(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  iniciarSesion(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  cerrarSesion() {
    return signOut(this.auth);
  }


}