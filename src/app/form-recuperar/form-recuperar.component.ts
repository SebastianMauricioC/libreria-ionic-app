import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-form-recuperar',
  templateUrl: './form-recuperar.component.html',
  styleUrls: ['./form-recuperar.component.scss'],
})
export class FormRecuperarComponent implements OnInit {

  constructor(private servicioService: ServiciosService) { }

  ngOnInit() {
  }

  formData = { email: '' };

  onSubmit() {
    this.servicioService.cambiarContrasena(this.formData.email)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
