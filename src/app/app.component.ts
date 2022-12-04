import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;

  images = [
    {
      title: 'beach',
      url: 'https://images/beach',
    },
    {
      title: 'hill',
      url: 'https://images/hill',
    },
    {
      title: 'shop',
      url: 'https://images/shop',
    },
    {
      title: 'building',
      url: 'https://images/building',
    },
    {
      title: 'building',
      url: 'https://images/building',
    },
    {
      title: 'building',
      url: 'https://images/building',
    },
    {
      title: 'building',
      url: 'https://images/building',
    },
    {
      title: 'building',
      url: 'https://images/building',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
