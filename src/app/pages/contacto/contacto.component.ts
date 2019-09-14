import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import Swal from 'sweetalert2';

import { MessageService } from './../../services/message.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface Servicio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  selectedValue: string;

  servicios: Servicio[] = [
    {value: 'Habitacion Doble', viewValue: 'Habitación Doble'},
    {value: 'Habitacion Triple', viewValue: 'Habitación Triple'},
    {value: 'Habitacion Matrimonial', viewValue: 'Habitación Matrimonial'},
    {value: 'Cabana', viewValue: 'Cabaña'},
    {value: 'Departamento', viewValue: 'Departamento'}
  ];


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor( public _MessageService: MessageService) { 
  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire(
        'Tu solicitud ha sido enviada!',
        'Pronto estaremos en contacto contigo',
        'success'
      );
    });
    }

  ngOnInit() {
  }

  fechaInicioSelected(type: string, event: MatDatepickerInputEvent<Date>){

  }

  fechaFinSelected(type: string, event: MatDatepickerInputEvent<Date>){

  }


}


