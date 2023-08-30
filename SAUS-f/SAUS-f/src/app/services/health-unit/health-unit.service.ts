import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HealthUnits } from 'src/app/models/models';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

//Camada de service da unidade saúde, com todas as requisições
export class HealthUnitService {

  private url: string = "http://localhost:8080/healthUnit";

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  create(healthUnit: HealthUnits) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.post<HealthUnits>(this.url, healthUnit, {headers: headers});
  }

  readAll() {
    return this.http.get<HealthUnits[]>(this.url);
  }

  readById(id: number) {
    return this.http.get<HealthUnits>(this.url + `/${id}`);
  }

  change(id:number, healthUnits: HealthUnits) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.put((`${this.url}/${id}`), healthUnits, {headers: headers});
  }

  delete(id:number) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.delete(this.url + `/${id}`, {headers: headers});
  }
}
