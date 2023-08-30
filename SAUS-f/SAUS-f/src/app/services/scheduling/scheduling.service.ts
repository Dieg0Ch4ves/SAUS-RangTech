import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scheduling } from 'src/app/models/models';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

//Camada de service do agendamento, com todas as requisições
export class SchedulingService {
  private url: string = "http://localhost:8080/scheduling";

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  create(id:number, scheduling: Scheduling) {
    return this.http.post<Scheduling>((`${this.url}/${id}`), scheduling);
  }

  change(id:number, scheduling: Scheduling) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.put((`${this.url}/${id}`), scheduling, {headers:headers});
  }

  delete(id:number) {
    const token: any = this.userService.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token.token,
      'Content-Type': 'application/json'
    };
    return this.http.delete(`${this.url}/${id}`, {headers: headers});
  }

  readById(id:number) {
    return this.http.get<Scheduling>(`${this.url}/${id}`);
  }

  getAvailableTimes(doctorId: number, date: string) {
    const apiUrl = `${this.url}/available-times/${doctorId}?day=${date}`;
    return this.http.get<string[]>(apiUrl);
  }
}
