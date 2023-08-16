import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const ROLE_KEY = 'AuthRole';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  public setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public setUserName(user: string): void {
    localStorage.setItem(USERNAME_KEY, user);
  }

  public getUserName(): string | null {
    return localStorage.getItem(USERNAME_KEY);
  }

  public setRole(role: string): void {
    localStorage.setItem(ROLE_KEY, role);
  }

  public getRole(): string | null {
    return localStorage.getItem(ROLE_KEY);
  }

  public logOut(): void {
    localStorage.clear();
  }
}
