import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Library } from '../interfaces/library';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
library: any;
private apiEndpoint = environment.apiUrl;


  constructor(private http: HttpClient) { }

public getAllLibraries () : Observable<Library[]>{
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get<Library[]>(`${this.apiEndpoint}/library/all`, { headers });
}


}
