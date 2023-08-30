import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HealthUnitService } from 'src/app/services/health-unit/health-unit.service';

@Component({
  selector: 'app-change-health-unit',
  templateUrl: './change-health-unit.component.html',
  styleUrls: ['./change-health-unit.component.css']
})

//Component para alteração da health unit
export class ChangeHealthUnitComponent implements OnInit{

  healthUnitForm: FormGroup = new FormGroup({});
  healthUnitId: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ChangeHealthUnitComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private service: HealthUnitService
  ) {
    this.healthUnitId = data.healthUnitId;
  }

  ngOnInit(): void {
    this.healthUnitForm = this.fb.group({
      name: ['', [Validators.required]],
      local: ['', [Validators.required]],
      openingTime: ['', [Validators.required]],
      closingTime: ['', [Validators.required]],
    })
    this.service.readById(this.healthUnitId).subscribe(result => {
      const formattedOpeningTime = result.openingTime.split(':').slice(0, 2).join(':');
      const formattedClosingTime = result.closingTime.split(':').slice(0, 2).join(':');

      this.healthUnitForm.patchValue({
        name: result.name,
        local: result.local,
        openingTime: formattedOpeningTime,
        closingTime: formattedClosingTime,
      })
    });
  }

  change() {
    this.service.change(this.healthUnitId, this.healthUnitForm.value).subscribe(result => {})
    this.dialogRef.close();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
    this.healthUnitForm.reset();
  }
}
