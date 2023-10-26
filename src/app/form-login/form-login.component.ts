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
      .then(response => console.log("Correcto ✔"))
      .catch(error => console.log(error))

  }

  cerrarSesion(){
    this.serviciosService.cerrarSesion();
  }

  ngOnInit() {}

}
