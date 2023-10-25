import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private auth: Auth) {}

    registrar(email: any, password: any){
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

  
}
