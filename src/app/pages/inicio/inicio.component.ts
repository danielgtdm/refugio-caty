import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  slides = [
    {
      image: "assets/img/cafe.jpg",
      text: "cafeteria"
    },
    {
      image: "assets/img/cafe2.jpg",
      text: "cafeteria"
    }
  ]

  slidesDepartamentos = [
    {
      image: "assets/img/departamento/departamento-1.jpg",
      text: "departamento-1"
    },
  ]

  slidesCabanas = [
    {
      image: "assets/img/cabana/cabana-1.jpg",
      text: "cabana-1"

    },
    {
      image: "assets/img/cabana/cabana-2.jpg",
      text: "cabana-2"

    },
    {
      image: "assets/img/cabana/cabana-3.jpg",
      text: "cabana-3"

    },
    {
      image: "assets/img/cabana/cabana-4.jpg",
      text: "cabana-4"

    },
    {
      image: "assets/img/cabana/cabana-5.jpg",
      text: "cabana-5"

    },
    {
      image: "assets/img/cabana/cabana-6.jpg",
      text: "cabana-6"

    },
    {
      image: "assets/img/cabana/cabana-7.jpg",
      text: "cabana-7"

    }
  ]
  constructor() { }

  ngOnInit() {
  }



}
