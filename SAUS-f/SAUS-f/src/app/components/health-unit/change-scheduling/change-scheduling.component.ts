import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Scheduling } from 'src/app/models/models';
import { SchedulingService } from 'src/app/services/scheduling/scheduling.service';

@Component({
  selector: 'app-change-scheduling',
  templateUrl: './change-scheduling.component.html',
  styleUrls: ['./change-scheduling.component.css']
})

//Component para alteração do doctor
export class ChangeSchedulingComponent implements OnInit{

  id: number = 0;
  schedulingForm: FormGroup = new FormGroup({});
  statusOptions = [
    { value: 0, label: 'AGENDADO' },
    { value: 1, label: 'CONCLUÍDO' },
    { value: 2, label: 'CANCELADO' }
  ];

  constructor(
    public dialogRef: MatDialogRef<ChangeSchedulingComponent>,
    private fb: FormBuilder,
    private service: SchedulingService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
      this.schedulingForm = this.fb.group({
      namePatient: ['', [Validators.required]],
      document: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })

    this.service.readById(this.id).subscribe(result => {
      this.schedulingForm.patchValue({
        namePatient: result.namePatient,
        document: result.document,
        status: result.status,
      })
    });
  }

  change() {
    this.service.change(this.id, this.schedulingForm.value).subscribe(result => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
    this.schedulingForm.reset();
  }
}
