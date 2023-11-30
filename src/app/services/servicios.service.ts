import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

import { Firestore, collection, addDoc, collectionData, getDocs, query, deleteDoc, doc, where } from '@angular/fire/firestore'
import Persona from '../interfaces/persona';
import Libro from '../interfaces/libro';

import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private _storage: Storage | null = null;

  constructor(private auth: Auth, private firestore: Firestore, private alertController: AlertController, private storage: Storage) {
    this.init();
   }

   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async obtener(){
    await this.storage.keys()
      .then(response => console.log(response))
      .catch(error => console.log(error))

      const name = await this.storage.get('name')
        .then(response => console.log(response))
        .catch(error => console.log(error))
  }

  async agregarIonic(nombre: String){
    await this.storage.set('name', nombre);
    console.log("Agregado")
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  // Alerta registro de usuario en base de datos correctamente
  async alertaRegistroCorrecto() {
    console.log('Correcto ✅')

    const alert = await this.alertController.create({
      header: 'Correcto',
      subHeader: 'Se ha registrado correctamente',
      message: '¡Bienvenido! ',
      buttons: ['Aceptar'],
      mode: 'ios',
    });

    await alert.present();
  }

  // Alerta sesión iniciada correctamente
  async alertaInicioSesionCorrecto() {
    console.log('Correcto ✅')

    const alert = await this.alertController.create({
      header: 'Correcto',
      subHeader: 'Ha iniciado sesión',
      message: '¡Bienvenido!',
      buttons: ['Aceptar'],
      mode: 'ios',
    });

    await alert.present();
  }

  // Alerta sesión cerrada correctamente
  async alertaSesiónCerradaCorrecto() {
    console.log('Correcto ✅')

    const alert = await this.alertController.create({
      header: 'Correcto',
      subHeader: 'Ha cerrado su sesión',
      message: '¡Hasta luego!',
      buttons: ['Aceptar'],
      mode: 'ios',
    });

    await alert.present();
  }

  // Alerta de recuperación correcta
  async alertaRecuperacionCorrecto() {
    console.log('Correcto ✅')
    const alert = await this.alertController.create({
      header: 'Correcto',
      subHeader: 'Por favor, revise su bandeja de entrada',
      message: 'Se ha enviado un correo electrónico con su recuperación',
      buttons: ['Aceptar'],
      mode: 'ios',
    });


    await alert.present();
  }

  // Alerta registro incorrecto en campos
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

  // Alerta registro incorrecto de contraseña
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

  // Alerta de inicio de sesión incorrecto
  async alertaInicioSesionIncorrecto() {
    console.log('Incorrecto ❌')
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Ha habido un problema',
      message: 'La contraseña o correo electrónico que has ingresado son incorrectos, ingrésalos nuevamente',
      buttons: ['Aceptar'],
      mode: 'ios',
    });


    await alert.present();
  }

  // Alerta de recuperación incorrecta
  async alertaRecuperacionIncorrecto() {
    console.log('Incorrecto ❌')
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Ha habido un problema',
      message: 'Ingrese un correo electrónico válido',
      buttons: ['Aceptar'],
      mode: 'ios',
    });


    await alert.present();
  }

  // Registra al usuario a la base de datos con dos parámetros
  registrar(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Inicia sesión con dos parámetros
  iniciarSesion(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Cierra sesión del usuario
  cerrarSesion() {
    return signOut(this.auth);
  }

  // Envía correo electrónico para recuperar contraseña a partir del correo electrónico
  cambiarContrasena(email: any){
    return sendPasswordResetEmail(this.auth, email);
  }

  // Agrega persona a base de datos
  agregarPersona(persona: Persona) {
    const personaRef = collection(this.firestore, 'personas');
    return addDoc(personaRef, persona);
  }

  // Agrega libro a base de datos
  agregarLibro(libro: Libro) {
    const libroRef = collection(this.firestore, 'libros');
    return addDoc(libroRef, libro);
  }

  obtenerLibros(): Observable<Libro[]> {
    const libroRef = collection(this.firestore, 'libros');
    return collectionData(libroRef, { idField: 'autor' }) as Observable<Libro[]>;
  }

  // Obtiene libros de base de datos
  async getLibros() {
    return (
      await getDocs(query(collection(this.firestore, 'libros')))
    ).docs.map((libros) => libros.data());
  }

  // Elimina documento
  async eliminarLibro(id: any) {
    await deleteDoc(doc(this.firestore, "libros", id));
  }

  // Crear consulta con filtro de nombre obtenido de un parámetro
  async hacerQuery(nombre: any) {
    const libroRef = collection(this.firestore, 'libros');
    const q = query(collection(this.firestore, "libros"), where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

}
