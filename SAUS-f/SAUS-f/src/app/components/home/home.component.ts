import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { HealthUnits, User } from 'src/app/models/models';
import { HealthUnitService } from 'src/app/services/health-unit/health-unit.service';
import { ChangeHealthUnitComponent } from './change-health-unit/change-health-unit.component';
import { UserService } from 'src/app/services/user/user.service';

//Component home com todas as unidades de saúde
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  healthUnits: HealthUnits[] = [];
  user = new User();

  constructor(
    private service: HealthUnitService,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.service.readAll().pipe(
      tap()
    )
    .subscribe(
      data => {
        this.healthUnits = data;
      }
    )

    this.userService.getUser().subscribe(result => {
      this.user = result
      })
  }

  redirect(id: number) {
    this.router.navigate(['/health-unit', id]);
  }

  delete(id: number) {
    this.service.delete(id).subscribe(result => {})
    window.location.reload();
  }

  change(healthUnitId: number):void {
    const dialogRef = this.dialog.open(ChangeHealthUnitComponent, {
      width: "500px",
      data: {healthUnitId: healthUnitId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed")
    })
  }

  roles() {
    if(this.user.role === 'ADMIN') {
      return true;
    } else (this.user.role === 'USER')
      return false;
  }

  logout() {
    this.userService.logout();
  }

}
