import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserRegister } from 'src/app/models/models';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

//Camada de service para usuario, com todas as requisições, incluindo também mecanismo de salvar o token do usuario no local storage
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  private url: string = 'http://localhost:8080/auth'

  register(user: UserRegister) {
    return this.http.post<UserRegister>((`${this.url}/register`), user);
  }

  login(login: string, password: string) {
    return this.http.post<any>((`${this.url}/login`), {login: login, password: password})
    .pipe(
      tap(response => localStorage.setItem('token', JSON.stringify(response)))
    );
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null
  }

  logout():void {
    localStorage.removeItem('token')
  }

  getUser() {
    const token: any = this.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.get<User>(this.url + `/user`, {headers: headers} )
  }

}
