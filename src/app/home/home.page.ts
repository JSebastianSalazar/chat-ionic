import { Component } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(private authServices: AuthService, private router: Router) {}
    public cerrarSesion() {
        this.authServices.logout();
    }
}
