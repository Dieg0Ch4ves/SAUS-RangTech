import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SchedulingComponent } from '../scheduling/scheduling.component';
import { ActivatedRoute } from '@angular/router';
import { HealthUnits, User } from 'src/app/models/models';
import { HealthUnitService } from 'src/app/services/health-unit/health-unit.service';
import { tap } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { ChangeDoctorComponent } from './change-doctor/change-doctor.component';
import { ChangeSchedulingComponent } from './change-scheduling/change-scheduling.component';
import { SchedulingService } from 'src/app/services/scheduling/scheduling.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-health-unit',
  templateUrl: './health-unit.component.html',
  styleUrls: ['./health-unit.component.css']
})

//Component para listagem do doctor para cada unidade de saúde
export class HealthUnitComponent implements OnInit{

  id: number = 0;
  healthUnit = new HealthUnits();
  user = new User();


  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private service: HealthUnitService,
    private doctorService: DoctorService,
    private schedulingService: SchedulingService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 0;
    })

    this.service.readById(this.id).pipe(
      tap()
    )
    .subscribe(
      data => {
        this.healthUnit = data
      }
    )

    this.userService.getUser().subscribe(result => {
      this.user = result;
    })
  }

  addScheduling(doctorId: number):void {
    const dialogRef = this.dialog.open(SchedulingComponent, {
      width: "500px",
      data: {doctorId: doctorId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed")
    })
  }

  delete(doctorId: number) {
    this.doctorService.delete(doctorId).subscribe(result => {})
    window.location.reload();
  }

  changeDoctor(doctorId: number):void {
    const dialogRef = this.dialog.open(ChangeDoctorComponent, {
      width: "500px",
      data: {doctorId: doctorId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed")
    })
  }

  changeScheduling(id: number):void {
    const dialogRef = this.dialog.open(ChangeSchedulingComponent, {
      width: "500px",
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed")
    })
  }

  deleteScheduling(id: number) {
    this.schedulingService.delete(id).subscribe(result => {});
    window.location.reload();
  }

  roles() {
    if(this.user.role === 'ADMIN') {
      return true;
    } else (this.user.role === 'USER')
      return false;
  }

}
