import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  slides = [
    {
      image: "assets/img/departamento/departamento-8.jpg",
      text: "departamento-8"
    },
    {
      image: "assets/img/departamento/departamento-9.jpg",
      text: "departamento-9"
    },
    {
      image: "assets/img/departamento/departamento-12.jpeg",
      text: "departamento-12"
    },
    {
      image: "assets/img/departamento/departamento-6.jpg",
      text: "departamento-6"
    }
  ];


  slidesInside = [
    {
      image: "assets/img/departamento/departamento-1.jpg",
      text: "departamento-1"
    },
    {
      image: "assets/img/departamento/departamento-2.jpg",
      text: "departamento-2"
    },
    {
      image: "assets/img/departamento/departamento-3.jpg",
      text: "departamento-3"
    },
    {
      image: "assets/img/departamento/departamento-5.jpg",
      text: "departamento-5"
    },
    {
      image: "assets/img/departamento/departamento-7.jpg",
      text: "departamento-7"
    },
    {
      image: "assets/img/departamento/departamento-10.jpg",
      text: "departamento-10"
    },
    {
      image: "assets/img/departamento/departamento-13.jpeg",
      text: "departamento-13"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
