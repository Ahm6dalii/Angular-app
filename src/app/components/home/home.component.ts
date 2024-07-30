import { Component } from '@angular/core';
import { ProductComponent } from '../product-card/product.component';
import { CatogeryComponent } from '../catogery/catogery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CatogeryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
