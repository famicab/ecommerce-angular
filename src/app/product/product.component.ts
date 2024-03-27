import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/model/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: Product;
}
