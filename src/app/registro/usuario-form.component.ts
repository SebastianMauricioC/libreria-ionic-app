import { Component } from '@angular/core';

import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario-form',
  //templateUrl: './hero-form.component.html',
  //styleUrls: ['./hero-form.component.css']
})

export class UsuarioFormComponent {

  model = new Usuario(1, 'Sebastián', 'Contrasena',);

  submitted = false;

  onSubmit() { this.submitted = true; }

}
