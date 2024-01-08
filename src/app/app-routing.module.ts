import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ShowShoppingComponent } from "./show-shopping/show-shopping.component";


const routes: Routes = [
  
  { path: 'home', component: HomeComponent},
  { path: 'add', component: AddProductComponent},
  { path: 'Shopping', component: ShowShoppingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
