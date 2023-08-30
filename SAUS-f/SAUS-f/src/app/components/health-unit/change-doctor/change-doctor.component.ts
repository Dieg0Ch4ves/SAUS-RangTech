import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HealthUnits } from 'src/app/models/models';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { HealthUnitService } from 'src/app/services/health-unit/health-unit.service';

@Component({
  selector: 'app-change-doctor',
  templateUrl: './change-doctor.component.html',
  styleUrls: ['./change-doctor.component.css']
})

//Component para alteração da health unit
export class ChangeDoctorComponent implements OnInit {
  doctorForm: FormGroup = new FormGroup({});
  doctorId: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ChangeDoctorComponent>,
    private fb: FormBuilder,
    private service: DoctorService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.doctorId = data.doctorId
  }

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      name: ['', [Validators.required]],
      specialty: ['', [Validators.required]],
    })

    this.service.readById(this.doctorId).subscribe(result => {
      this.doctorForm.patchValue({
        name: result.name,
        specialty: result.specialty,
      })
    });
  }

  change() {
    this.service.changeDoctor(this.doctorId, this.doctorForm.value).subscribe(result => {})
    this.dialogRef.close();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
    this.doctorForm.reset();
  }

}
