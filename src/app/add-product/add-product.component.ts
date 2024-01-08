import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder,private _productService:ProductService,private router:Router){}

  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      description: ['', [Validators.required, Validators.minLength(10)]]
  });
 
 
  ngOnInit() {}
  addProduct() {
    this._productService.addProduct(this.productForm.getRawValue()).subscribe({
      next: () => this.router.navigate(['/home']),
    });
    alert('Product Successfully added');
  }
}
