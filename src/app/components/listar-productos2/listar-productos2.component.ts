import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-productos2',
  standalone: true,
  templateUrl: './listar-productos2.component.html',
  imports: [NgbModule,RouterModule,ReactiveFormsModule,CommonModule
    ,NgFor, FormsModule],
  styleUrls: ['./listar-productos2.component.css']
})
export class ListarProductosComponent2 implements OnInit {
  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

}
