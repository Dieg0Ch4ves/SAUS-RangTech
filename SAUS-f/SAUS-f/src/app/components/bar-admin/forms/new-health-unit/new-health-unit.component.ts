import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HealthUnitService } from 'src/app/services/health-unit/health-unit.service';

@Component({
  selector: 'app-new-health-unit',
  templateUrl: './new-health-unit.component.html',
  styleUrls: ['./new-health-unit.component.css']
})
//Formulario para novo health unit
export class NewHealthUnitComponent implements OnInit {

  healthUnitForm: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<NewHealthUnitComponent>,
    private fb: FormBuilder,
    private service: HealthUnitService
  ) {}


  ngOnInit(): void {
    this.healthUnitForm = this.fb.group({
      name: ['', [Validators.required]],
      local: ['', [Validators.required]],
      openingTime: ['', [Validators.required]],
      closingTime: ['', [Validators.required]],
    })
  }

  create() {
    this.service.create(this.healthUnitForm.value).subscribe(result => {})
    this.dialogRef.close();
    this.healthUnitForm.reset();
    window.location.reload();
  }

  cancel() {
    this.dialogRef.close();
    this.healthUnitForm.reset();
  }
}
