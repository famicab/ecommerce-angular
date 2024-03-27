import { Injectable } from '@angular/core';
import { Product } from '../model/store';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/products';
  

  async getAllProducts(): Promise<Product[]>{
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
