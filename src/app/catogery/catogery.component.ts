import { Component } from '@angular/core';
import { produt } from '../../interfaces/product';

@Component({
  selector: 'app-catogery',
  standalone: true,
  imports: [],
  templateUrl: './catogery.component.html',
  styleUrl: './catogery.component.css',
})
export class CatogeryComponent {
  catogery: produt[] = [
    {
      title: 'Card title 1',
      imgUrl: 'assets/images/2.jpg',
    },
    {
      title: 'Card title 2',
      imgUrl: 'assets/images/OIP.jpeg',
    },
    {
      title: 'Card title 3',
      imgUrl: 'assets/images/OIP1.jpeg',
    },
    {
      title: 'Card title 3',
      imgUrl: 'assets/images/2.jpg',
    }
  ];
  
}
