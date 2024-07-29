import { Component } from '@angular/core';
import { produt } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: produt[] = [
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
