import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewHealthUnitComponent } from './forms/new-health-unit/new-health-unit.component';
import { NewDoctorComponent } from './forms/new-doctor/new-doctor.component';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-bar-admin',
  templateUrl: './bar-admin.component.html',
  styleUrls: ['./bar-admin.component.css']
})

//Component para o admin poder fazer criações de doctor e health units
export class BarAdminComponent implements OnInit{

  isNavBarScrolled = false;
  user = new User();

  constructor(
    private dialog: MatDialog,
    private service: UserService
  ) {}

  ngOnInit(): void {
    if(this.service.getToken() !== null)
    this.service.getUser().subscribe(result => {
      this.user = result;
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavBarScrolled = window.scrollY > 0;
  }

   addHealthUnit():void {
    const dialogRef = this.dialog.open(NewHealthUnitComponent, {
      width: "500px",
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  addDoctor():void {
    const dialogRef = this.dialog.open(NewDoctorComponent, {
      width: "500px",
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  roles() {
    if(this.user.role === 'ADMIN') {
      return true;
    } else (this.user.role === 'USER')
      return false;
  }

}
