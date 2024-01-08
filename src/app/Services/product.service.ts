import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../core/product';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = '  http://localhost:3000/products';
  apiUrlCart = 'http://localhost:3000/cart';
  constructor(private _http:HttpClient) { }
  addProduct(produit:Product){
    return this._http.post<Product>(this.apiUrl,produit);
  }
 /*getProducts(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }*/
  getProducts(): Observable<any> {
    return this._http.get<any>(this.apiUrl).pipe(
      tap(data => console.log('Products:', data)),
      catchError(error => {
        console.error('Error loading products:', error);
        return throwError(error);
      })
    );
  }
  addToCart(product: any) {
    return this._http.post(this.apiUrlCart,product)
  }

  getAllProducts() {
    return this._http.get(this.apiUrl);
  }

  getCart() {
    return this._http.get<any[]>(this.apiUrlCart)
  }
}
