import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

//Component para registro do usuario
export class RegisterComponent {

  user = new UserRegister();
  roleOptions = [
    { label: 'ADMIN', value: 0 },
    { label: 'USER', value: 1 }
  ];

  constructor(
    private service: UserService,
    private router: Router
  ) {}

  register() {
    const selectedRole = this.roleOptions.find(option => option.value === this.user.role);
    if (selectedRole) {
    this.user.role = selectedRole.value;
    }
    this.service.register(this.user).subscribe(result => {
      this.router.navigate(['/login'])
    })
  }


}
