import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { Category, Product } from '../shared/model/store';
import { CategoryService } from '../shared/service/category.service';
import { ProductService } from '../shared/service/product.service';
import { ProductComponent } from '../product/product.component';
import {TabViewModule} from 'primeng/tabview';
import { BrowseAllComponent } from '../browse-all/browse-all.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategoryComponent, ProductComponent, BrowseAllComponent, TabViewModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categoryService: CategoryService = inject(CategoryService);
  categories: Category[] = [];

  

  constructor(){
    this.categoryService.getAllCategories().then((categories: Category[]) => {
      this.categories = categories;
      console.log(categories);
    })

    
  }
}
