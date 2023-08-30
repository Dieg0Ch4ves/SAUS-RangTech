import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { HealthUnits } from 'src/app/models/models';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { HealthUnitService } from 'src/app/services/health-unit/health-unit.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})

//Formulario para novo doctor
export class NewDoctorComponent implements OnInit{
  doctorForm: FormGroup = new FormGroup({});
  healthUnits: HealthUnits[] = [];

  constructor(
    public dialogRef: MatDialogRef<NewDoctorComponent>,
    private fb: FormBuilder,
    private healthUnitService: HealthUnitService,
    private service: DoctorService,
  ) {}

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      name: ['', [Validators.required]],
      specialty: ['', [Validators.required]],
      healthUnit: ['', [Validators.required]],
    })

    this.healthUnitService.readAll().pipe(
      tap()
    )
    .subscribe( data => {
      this.healthUnits = data
    })
  }

  create() {
    this.service.create(this.doctorForm.value.healthUnit, this.doctorForm.value).subscribe(result => {})
    this.dialogRef.close();
    this.doctorForm.reset();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
    this.doctorForm.reset();
  }

}
