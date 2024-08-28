import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  formulario!: FormGroup;

  constructor(
    private fb:FormBuilder
  ){

  }

  iniciarForm(){
    this.formulario=this.fb.group({
      nombres:['',[Validators.required]],
      apellidos:['',[Validators.required]],
      telefono:['',[Validators.required]],      
      correo:['',[Validators.required]],      
      nacionalidad:['',[Validators.required]]
    })
  }
}
