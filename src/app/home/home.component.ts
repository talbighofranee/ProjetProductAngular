import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../core/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  list: string[] = [];
  selectedProduct: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  
    this.productService.getProducts().subscribe({
      next: (data) => (this.products = data as Product[]),
      error: (err) => console.log(err),
  })}

  private loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data?.products || []; 
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
  addToCart(p: any) {
    this.productService.getCart().subscribe({
      next: (data) => {
        let index = data.filter((pr)=>pr.id === p.id)
        if (index.length === 0) {
          this.productService.addToCart(p).subscribe();
        }
        else {
          alert("Product already exists !")
        }
      },
    });
}

selectProduct(p: any) {
  this.selectedProduct = p;
}
}
