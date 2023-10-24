import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  mensaje = 'Hola Mundo';

  onClick(){
    console.log("Zaza ✔")
  }

  ngOnInit() {
    // Esto lo hace al iniciar el componente
    console.log("Bienvenido a Librería Pajaritos")
  }


}
