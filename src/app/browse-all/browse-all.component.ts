import { Component, inject } from '@angular/core';
import { Product } from '../shared/model/store';
import { ProductService } from '../shared/service/product.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-browse-all',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './browse-all.component.html',
  styleUrl: './browse-all.component.css'
})
export class BrowseAllComponent {
  productService: ProductService = inject(ProductService);
  products: Product[] = [];

  constructor(){
    this.productService.getAllProducts().then((products: Product[]) => {
      this.products = products;
      console.log("Service called");
    })
  }
}
