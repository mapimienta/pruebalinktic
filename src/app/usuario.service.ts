import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuario:Observable<any[]>=of(
    [
      {
          "nombres":"usuario 1",
          "apellidos":"apellido 1",
          "telefono":"30030303",
          "correo":"m@gmail.com",
          "nacionalidad":"colombiano"
      },
      {
          "nombres":"usuario 2",
          "apellidos":"apellido 2",
          "telefono":"3003035465",
          "correo":"c@gmail.com",
          "nacionalidad":"venezolano"
      }
      ]
  );
  constructor() { }

  getusuario():Observable<any[]>{
    return this.listaUsuario;
  }
}
