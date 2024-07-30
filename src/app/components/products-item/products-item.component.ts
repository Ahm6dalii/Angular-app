import { Component, EventEmitter, Input, Output } from '@angular/core';
import { produt } from '../../../interfaces/product';

@Component({
  selector: 'app-products-item',
  standalone: true,
  imports: [],
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.css',
})
export class ProductsItemComponent {
  @Input() item: produt = {} as produt;
}
