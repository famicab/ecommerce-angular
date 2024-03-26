import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Category } from '../shared/model/store';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() category!: Category;
}
