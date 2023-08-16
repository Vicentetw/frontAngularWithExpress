import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiExpress = environment.apiUrl;
  constructor(private http: HttpClient) { }

  /* public login(nombre: string, password: string): Observable<any>{
    const loginData = {nombre, password};
    return this.http.post(`${this.apiExpress}/login`, loginData);
  } */
  login(user: string, password: string): Observable<any>{
    const payload= {user , password};
    return this.http.post<any>(`${this.apiExpress}/login`, payload);
  }

  
  //funcion para obtener el tonen almacenado
  getToken(): string |null {
    return localStorage.getItem('token')
  }
  isAuthenticated(): boolean {
    // Verificar si el token está presente y no está expirado
    const token = this.getToken();
    return token !== null; // Puedes agregar verificación de expiración aquí si es necesario
  }
}
