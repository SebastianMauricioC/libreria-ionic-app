import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private auth: Auth) {}

    registrar(email: any, password: any){
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

    iniciarSesion(email: any, password: any){
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    cerrarSesion(){
      return signOut(this.auth);
    }

  
}
