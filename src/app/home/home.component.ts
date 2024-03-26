import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { Category } from '../shared/model/store';
import { CategoryService } from '../shared/service/category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
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
