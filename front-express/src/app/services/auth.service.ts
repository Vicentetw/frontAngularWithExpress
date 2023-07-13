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

  public login(nombre: string, password: string): Observable<any>{
    const loginData = {nombre, password};
    return this.http.post(`${this.apiExpress}/login`, loginData);
  }
    
}
