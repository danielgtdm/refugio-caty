import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.css']
})
export class CafeteriaComponent implements OnInit {

  slides = [
    {
      image: "assets/img/cafeteria/cafeteria-1.jpg",
      text: "cafeteria-1"
    },
    {
      image: "assets/img/cafeteria/cafeteria-2.jpg",
      text: "cafeteria-2"
    },
    {
      image: "assets/img/cafeteria/cafeteria-3.jpg",
      text: "cafeteria-3"
    },
    {
      image: "assets/img/cafeteria/cafeteria-4.jpg",
      text: "cafeteria-4"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
