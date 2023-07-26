import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar.service';
import { environment } from 'src/environments/environment';
import { ImageFilter } from 'src/app/avatar.model';
import { Buyman } from 'src/app/avatar.model';
import { ProductBuy } from 'src/app/avatar.model';




@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css'],
})
export class ProductBuyComponent implements OnInit {
  id!: number;
  data!: any;
  editAvatarForm!: FormGroup;
  avatarData!: any;
  image: string;
  starRating = 0;
  comment: any[];

  texttest: string ='es es un texto de pruba para el objeto este sera remplazado por otro en un futuro hay se pondra un texto referente a las caracteristicas del producto y otros datos referentes al vendedor y donde esta ubicado'

  imageFilter: ImageFilter[] = [
    {text:this.texttest,caract:['barato','grande','rojo'],tag:['tarde','ciudad','azulado'],price: 1,color:'azul atardecer',url:'assets/Imagenes prueba/a-1225983.jpg',extraurl:['assets/Imagenes prueba/a-1225983.jpg','assets/Imagenes prueba/ai-art-clouds-colorful-sky-2226902.jpg','assets/Imagenes prueba/anime-1562445.jpg','assets/Imagenes prueba/anime-girl-1275977.jpg']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['nubaldo','rojo','tarde'],price: 6,color:'rojo nublado',url:'assets/Imagenes prueba/ai-art-clouds-colorful-sky-2226902.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['japones','torres','poblado'],price: 2,color:'torre japones',url:'assets/Imagenes prueba/anime-1562445.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['tarde','luciernagas','tarde'],price: 7,color:'atardecer luciernagas',url:'assets/Imagenes prueba/anime-girl-1275977.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['fantasia','barco','cielo'],price: 3,color:'barco',url:'assets/Imagenes prueba/anime-girl-sky-1275967.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['cosmico','morado','planeta'],price: 8,color:'cosmico morado',url:'assets/Imagenes prueba/ART-1435431.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['fantasia','montañoso','subreal'],price: 4,color:'fantasia azul',url:'assets/Imagenes prueba/artwork-digital-art-nature-anime-2238164.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['noche','fantasia','ballenas','subreal'],price: 9,color:'constelacion ballenas',url:'assets/Imagenes prueba/artwork-digital-art-rocks-nature-whale-animals-water-2230288.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['estrellas','decierto','noche'],price: 5,color:'decierto estrellado',url:'assets/Imagenes prueba/astronomy-Milky-Way-nature-lake-mountain-1212379.jpg',extraurl:['hola']},
    {text:this.texttest,caract:['hola','hola','hola'],tag:['ciudad','noche','iluminado'],price: 10,color:'ciudad noche',url:'assets/Imagenes prueba/city-1266869.jpg',extraurl:['hola']}
  ];

  nombre: string;
  reputacion: number;
  ubicacion: string;
  contacto: number;

  buyman: Buyman[] = [

    {nombre:'cristian',reputacion:10,ubicacion:'colombia',contacto:12330303123,color:'azul atardecer'},
    {nombre:'camilo',reputacion:8,ubicacion:'japon',contacto:12330303123,color:'rojo nublado'},
    {nombre:'destrom',reputacion:5,ubicacion:'mexico',contacto:12330303123,color:'torre japones'},
    {nombre:'paco',reputacion:10,ubicacion:'alemania',contacto:12330303123,color:'atardecer luciernagas'},
    {nombre:'maria',reputacion:1,ubicacion:'china',contacto:12330303123,color:'barco'},
    {nombre:'jose',reputacion:8,ubicacion:'ecuador',contacto:12330303123,color:'cosmico morado'},
    {nombre:'luis',reputacion:9,ubicacion:'chile',contacto:12330303123,color:'fantasia azul'},
    {nombre:'rail',reputacion:2,ubicacion:'usa',contacto:12330303123,color:'constelacion ballenas'},
    {nombre:'marina',reputacion:4,ubicacion:'suecia',contacto:12330303123,color:'decierto estrellado'},
    {nombre:'tao',reputacion:100,ubicacion:'china',contacto:12330303123,color:'ciudad noche'}

    ];

  descripcion: any [];
  opiniones: any [];
  opcompra: string;

  productbuy: ProductBuy[] = [

    {titulodescripcion:['estado','color','garantia','cuotas','memoria'],descripcion:['nuevo','azul','1 año','no','100gb'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'azul atardecer'},
    {titulodescripcion:['estado','color'],descripcion:['hola2','hola2'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'rojo nublado'},
    {titulodescripcion:['estado','color'],descripcion:['hola3','hola3'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'ciudad noche'},
    {titulodescripcion:['estado','color'],descripcion:['hola4','hola4'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'torre japones'},
    {titulodescripcion:['estado','color'],descripcion:['hola5','hola5'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'atardecer luciernagas'},
    {titulodescripcion:['estado','color'],descripcion:['hola6','hola6'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'barco'},
    {titulodescripcion:['estado','color'],descripcion:['hola7','hola7'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'cosmico morador'},
    {titulodescripcion:['estado','color'],descripcion:['hola8','hola8'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'fantasia azul'},
    {titulodescripcion:['estado','color'],descripcion:['hola9','hola9'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'constelacion ballenas'},
    {titulodescripcion:['estado','color'],descripcion:['hola10','hola10'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],descripciontext:this.texttest,color:'decierto estrellado'}

    ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: AvatarService,
    private actRoute: ActivatedRoute
  ) {
    this.editAvatarForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }



  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];

      /*console.log(this.id);
      this.service.getAvatarById(this.id).subscribe((res) => {
        console.log(res);
        this.data = res;
        this.editAvatarForm.get('name')?.setValue(this.data.name);
      });*/
    });
  }

  uploadAvatar(event: any) {
    const file = event.target.files[0];

    this.editAvatarForm.patchValue({
      avatar: file,
    });
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('name', this.editAvatarForm.get('name')?.value);
    formData.append('avatar', this.editAvatarForm.get('avatar')?.value);

    this.http
      .put(`${environment.RealURL}/update/${this.id}`, formData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error: (error) => {
          alert('Error occurred while uploading avatar');
        },
      });
  }

  modalData(avatar: any) {
    console.log(avatar);
    this.avatarData = avatar;
  }

  changeimage(url: any){
    console.log(url);
    this.image = url

  }

  changeimagelater(url: any){

    setTimeout(()=>{

      console.log(url);
      this.image = url

    },1)



  }

  RatingRest(){

    this.starRating = 0;

  }

  CommentResult(text:any){

    this.comment = [text,this.starRating];
    console.log(this.comment);

  }



}
