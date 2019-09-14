import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabana',
  templateUrl: './cabana.component.html',
  styleUrls: ['./cabana.component.css']
})
export class CabanaComponent implements OnInit {

  slides = [
    {
      image: "assets/img/cabana/cabana-3.jpg",
      text: "cabana-3"
    },
    {
      image: "assets/img/cabana/cabana-4.jpg",
      text: "cabana-4"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
