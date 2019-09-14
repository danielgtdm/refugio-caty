import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostal-inicio',
  templateUrl: './hostal-inicio.component.html',
  styleUrls: ['./hostal-inicio.component.css']
})
export class HostalInicioComponent implements OnInit {

  slidesHabDoble = [
    {
      image: "assets/img/hostal/hab-doble/hab-doble-1.jpg",
      text: "hab-doble-1"
    },
    {
      image: "assets/img/hostal/hab-doble/hab-doble-2.jpg",
      text: "hab-doble-2"
    }
  ]

  slidesHabTriple = [
    {
      image: "assets/img/hostal/hab-triple/hab-triple-1.jpg",
      text: "hab-triple-1"
    },
    {
      image: "assets/img/hostal/hab-triple/hab-triple-2.jpg",
      text: "hab-triple-2"
    },
    {
      image: "assets/img/hostal/hab-triple/hab-triple-3.jpg",
      text: "hab-triple-3"
    }
  ]

  slidesHabMatrimonial = [
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-1.jpg",
      text: "hab-matrimonial-1"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-2.jpg",
      text: "hab-matrimonial-2"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-3.jpg",
      text: "hab-matrimonial-3"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-4.jpg",
      text: "hab-matrimonial-4"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-5.jpeg",
      text: "hab-matrimonial-5"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-6.jpeg",
      text: "hab-matrimonial-6"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-7.jpeg",
      text: "hab-matrimonial-7"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-8.jpeg",
      text: "hab-matrimonial-8"
    },
    {
      image: "assets/img/hostal/hab-matrimonial/hab-matrimonial-9.jpeg",
      text: "hab-matrimonial-9"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
