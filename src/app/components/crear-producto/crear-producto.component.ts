import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { Seller} from 'src/app/avatar.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: UntypedFormGroup;
  titulo = 'Crear producto';
  id: string | null;

  array:any[]
  inputs:any
  index:any

  seller: Seller[];

  listProductos: Seller[] = [];

  inputform:any
  validatorerror:any

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
      image: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
    this.obtenerSellers();
  }

  uploadAvatar(event: any) {
    const file = event.target.files[0];

    this.productoForm.patchValue({
      image: file,
    });
  }

  agregarProducto() {

    console.log(this.productoForm.get('avatar')?.value);

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
      image: this.productoForm.get('image')?.value,
    }

    console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })


  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      })
    }
  }

  validarCampos(){

    var continuar:Boolean = true

    this.inputform = document.getElementsByClassName('inputform');
    this.validatorerror = document.getElementsByClassName('validatorerror');
    for (this.index = 0; this.index < this.inputform.length; ++this.index) {

      if(this.inputform[this.index].value === ""){

        this.validatorerror[this.index].style.display = ""
        continuar = false

      }else if(this.inputform[this.index].value !== ""){

        this.validatorerror[this.index].style.display = "none"

      }

    }

    if(continuar == true){

      this.btnform()

    }

  }

  btnform(){

    this.array = []

    this.inputs = document.getElementsByTagName('input');
    for (this.index = 0; this.index < this.inputs.length; ++this.index) {
        // deal with inputs[index] element.

      if(this.array == null){

      this.array = [this.inputs[this.index].value/*,this.inputs[this.index].id*/]

      }else{

        this.array.push(this.inputs[this.index].value/*,this.inputs[this.index].id*/)

      }


    }

    const SELLER: Seller = {
      Nombres: this.array[0],
      Apellidos: this.array[1],
      Empresa: this.array[2],
      Departamento: this.array[3],
      Ciudad: this.array[4],
      Dirrecion: this.array[5],
      Telefono: this.array[6],
      Telefono2: this.array[7],
      Telefono3: this.array[8],}

      //console.log(SELLER)

      this.listProductos.push(SELLER)

      this._productoService.guardarSeller(SELLER).subscribe(data => {
        this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
        this.router.navigate(['/crear-producto']);
      }, error => {
        console.log("error");
        this.productoForm.reset();
      })

    console.log(this.array)

  }

  obtenerSellers() {
    this._productoService.getSellers().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  scrollTop(){

    window.scroll({
      top: 900,
      left: 0,
      behavior: 'smooth'
    });

  }

  scrollTop2(){

    window.scroll({
      top: 1580,
      left: 0,
      behavior: 'smooth'
    });

  }

}
