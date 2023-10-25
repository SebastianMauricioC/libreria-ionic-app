import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent  implements OnInit {

  constructor(private serviciosService: ServiciosService) { }


  formData = {email: '', password: ''};

  onSubmit(){
    console.log(this.formData);
  }

  ngOnInit() {}

}
