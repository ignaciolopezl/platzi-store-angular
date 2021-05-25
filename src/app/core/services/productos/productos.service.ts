import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './../../../producto.model';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(private http : HttpClient) {
    
  }

  getAllProductos() {
    return this.http.get<Producto[]>(`${environment.url_api}/products/`);
  }
  getProducto(id: string) {
    return this.http.get<Producto>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Producto) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Producto>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
  
}
