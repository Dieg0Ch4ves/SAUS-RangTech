import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//Component para login do usuario
export class LoginComponent {

  user = new User();

  constructor(
    private service: UserService,
    private router: Router
  ) {}

  login() {
    this.service.login(this.user.login, this.user.password).subscribe((result) => {
      this.router.navigate(['/home']);
    });
  }
}
