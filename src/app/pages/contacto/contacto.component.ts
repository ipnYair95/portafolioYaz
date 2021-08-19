import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { Mensaje } from '../../services/service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {

  imagenes: string[]= [ 
    '../../../assets/iconos/whast.png',
    '../../../assets/iconos/face.png',
    '../../../assets/iconos/ins.png',
   ];

  forma: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.forma = this.fb.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(30)]],
    });
  }

  ngOnInit(): void {}

  campoInvalido(campo: String) {
    return (
      this.forma.get(`${campo}`)?.invalid && this.forma.get(`${campo}`)?.touched
    );
  }

  click() {
    if (this.forma.valid) {
      let mensaje: Mensaje = this.forma.value;

      this.service.enviarMensaje(mensaje).subscribe((resp) => {
        if (resp !== false) {
          Swal.fire({
            title: 'Exito',
            text: 'Mensaje enviado con exito',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.reset();
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Ha ocurrido un error, por favor revisar sus datos',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }

        return;
      });

      Swal.fire({
        title: 'Error!',
        text: 'Ha ocurrido un error, por favor revisar sus datos',
        icon: 'error',
        confirmButtonText: 'Ok',
      });

      return;
    }

    Swal.fire({
      title: 'Error!',
      text: 'Datos no válidos',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  reset() {
    this.forma.reset({
      correo: '',
      asunto: '',
      mensaje: '',
    });
  }
}
