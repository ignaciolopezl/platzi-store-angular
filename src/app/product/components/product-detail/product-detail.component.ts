import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from './../../../core/services/productos/productos.service';
import { Producto } from './../../../producto.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Producto;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProducto(id)
    .subscribe(product => {
      this.product = product
      console.log(product)
    });
  }

  createProduct() {
    const nuevoProducto: Producto = {
      id: '123',
      title: 'nuevo producto',
      image: 'assets/images/banner-1.jpg',
      price: 11000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(nuevoProducto)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Producto> = {
      price: 1234,
      description: 'nuevo titulo'
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('123')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
