import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Seller} from 'src/app/avatar.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'https://node-mongo-exp-api.onrender.com/api/productos';
  url2 = 'https://node-mongo-exp-api.onrender.com/api/sellers';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  getSellers(): Observable<any> {
    return this.http.get(this.url2);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  guardarSeller(seller: Seller): Observable<any> {
    return this.http.post(this.url2, seller);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
