import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';

  constructor(private router:Router){}

  nuevousuario(){
    this.router.navigate(['nuevousuario'])
  }
}
