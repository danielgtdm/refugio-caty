import { Component, OnInit } from '@angular/core';

export interface Tarifa {
  position: number;
  servicio: string;
  unidad: string;
  valor: string;
}

const ELEMENT_DATA: Tarifa[] = [
  {position: 1, servicio: 'Habitacion Doble', unidad: 'Noche', valor: '25000clp'},
  {position: 2,servicio: 'Habitacion Triple', unidad: 'Noche', valor: '25000clp'},
  {position: 3,servicio: 'Habitacion Matrimonial', unidad: 'Noche', valor: '25000clp'},
  {position: 4,servicio: 'Cabaña', unidad: 'Noche', valor: '25000clp'},
  {position: 5,servicio: 'Departamento', unidad: 'Noche', valor: '25000clp'},
  {position: 6,servicio: 'Departamento Vista al Mar', unidad: 'Noche', valor: '25000clp'},
  {position: 7,servicio: 'Desayuno', unidad: '1', valor: '7000clp'},
];


@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  displayedColumns: string[] = ['position','servicio', 'unidad', 'valor'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
