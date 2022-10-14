import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos = [];

  constructor() {
    this.photos = [{
      name: "Foto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt",
      url: "https://picsum.photos/id/237/200/300",
    },
    {
      name: "Foto 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt",
      url: "https://picsum.photos/id/352/200/300",
    },
    {
      name: "lemusiano",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt",
      url: "https://picsum.photos/id/242/200/300",
    }
  ]
  }

}
