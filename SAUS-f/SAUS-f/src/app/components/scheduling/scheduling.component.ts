import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { SchedulingService } from 'src/app/services/scheduling/scheduling.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
})

//Formulario de criação de agendamento, com tratamento de erros de horarios e selecionado o doctor
export class SchedulingComponent implements OnInit{
  doctorId: number = 0;
  currentDate: Date = new Date();
  schedulingForm: FormGroup = new FormGroup({});
  availableTimes: string[] = [];
  noAvailableTimes: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SchedulingComponent>,
    private service: SchedulingService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.doctorId = data.doctorId;
  }

  ngOnInit(): void {
    this.schedulingForm = this.fb.group({
      time: ['', [Validators.required]],
      day: ['', [Validators.required]],
      namePatient: ['', [Validators.required]],
      document: ['', [Validators.required]],
      status: [0, [Validators.required]],
    })
  }


  cancel() {
    this.dialogRef.close();
    this.schedulingForm.reset()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  listTime() {
   const selectedDate = this.schedulingForm.value.day;
   const formattedMonth = selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : `${selectedDate.getMonth() + 1}`;
   const formattedDate: string = `${selectedDate.getDate()}/${formattedMonth}/${selectedDate.getFullYear()}`;
    if (!formattedDate) {
      return;
    }

    this.service.getAvailableTimes(this.doctorId, formattedDate).pipe(
      tap()
    )
    .subscribe(data => {
      this.availableTimes = data;
      this.noAvailableTimes = data.length === 0;
    })
  }

  create() {
    const formData = this.schedulingForm.value;
    const selectedDate: Date = formData.day;
    const formattedMonth = selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : `${selectedDate.getMonth() + 1}`;
    const formattedDate: string = `${selectedDate.getDate()}/${formattedMonth}/${selectedDate.getFullYear()}`;
    this.schedulingForm.value.day = formattedDate;
    this.service.create(this.doctorId, this.schedulingForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.schedulingForm.reset();
    window.location.reload();
    this.openSnackBar("Agendamento Marcado", "Fechar")
  }


}
