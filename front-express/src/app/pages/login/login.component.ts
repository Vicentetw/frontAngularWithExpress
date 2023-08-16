import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: string;
  password: string = '';
  role: string = '';
  isLogged = false;
  isLogginFail = false;
  errMsj!: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.role = this.tokenService.getRole() || '';
    }
  }

  onLogin(): void {
    this.authService.login(this.user, this.password).subscribe(
      data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.accessToken);
        this.tokenService.setUserName(data.user);
        this.tokenService.setRole(data.role);
        this.role = data.role;
        this.router.navigate(['library']);
      },
      err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    );
  }
  

  logout() {
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['login']);
  }
}
