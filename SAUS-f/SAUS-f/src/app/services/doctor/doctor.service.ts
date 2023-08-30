import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/models/models';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

//Camada de service do doctor, com todas as requisições.
export class DoctorService {
  private url: string = "http://localhost:8080/doctor";

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  create(idHealthUnit: number, doctor: Doctor) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.post<Doctor>((`${this.url}/${idHealthUnit}`), doctor, {headers: headers});
  }

  readById(id: number) {
    return this.http.get<Doctor>(`${this.url}/get/${id}`)
  }

  readAll() {
    return this.http.get<Doctor[]>(this.url);
  }

  readByHealthUnit(idHealthUnit: number) {
    return this.http.get<Doctor[]>(`${this.url}/${idHealthUnit}`);
  }

  changeDoctor(id:number, doctor: Doctor) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.put((`${this.url}/${id}`), doctor, {headers: headers});
  }

  delete(id:number) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.delete(`${this.url}/${id}`, {headers:headers});
  }
}
