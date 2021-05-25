import { Component, OnInit } from '@angular/core';
import { Producto } from './../../../producto.model';
import { ProductosService } from './../../../core/services/productos/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Producto[] = [
  ];

  constructor(private productosService : ProductosService) { 
    //code
  }

  ngOnInit() {
    this.fetchProductos();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
  fetchProductos(){
    this.productosService.getAllProductos()
    .subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }

}
