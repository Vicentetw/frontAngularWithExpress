import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre!: string;
  password!: string;
  isLogged = false;
  isLogginFail = false;
constructor(private authService: AuthService, private router: Router){}

onSubmit(): void {
  this.authService.login(this.nombre, this.password)
    .subscribe(
      response => {
        const token = response.token;
        // Almacena el token en el almacenamiento local
        localStorage.setItem('token', token);
        // Redirijo a la página principal o en este caso a library
        this.router.navigate(['/library'])
      },
      error => {
        // Maneja el error de autenticación
        console.error('Error de autenticación:', error);
      }
    );
}
logout():void{};

}

export const TOKEN_KEY = 'token';