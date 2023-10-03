import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class ProductBuyComponent implements OnInit {
  id!: number;
  data!: any;
  editAvatarForm!: FormGroup;
  avatarData!: any;
  image: string;
  starRating = 0;
  starRating2 = 0;
  starRatingC = 0;
  comment: any[];
  ratevalue:number = 5;
  daytime: any = 0;
  tablefc: any;

  texttest: string ='es es un texto de pruba para el objeto este sera remplazado por otro en un futuro hay se pondra un texto referente a las caracteristicas del producto y otros datos referentes al vendedor y donde esta ubicado'

  imageFilter: ImageFilter[] = [
    {text:['titulo de prueba' ,'', 'texto de prueba que sera reemplazdo con un texto que describira de manera completa con todos sus caracteristicas colores disponibles y descripcion fisica y de usos' ,'', 'texto prueba 2', 'texto prueba 3', 'texto prueba 2' ,'', 'titulo de prueba 2' ,'', 'titulo de prueba 3','','assets/Imagenes prueba/1330715.png',''],
      text2:['1','0','2','0','3','3','3','0','1','0','3','0','4','0']
    ,caract:['testo de descripcion de carateristiaca del producto','grande','rojo'],tag:['tarde','ciudad','azulado'],price: 1,color:'azul atardecer',url:'assets/Imagenes prueba/a-1225983.jpg',extraurl:['assets/Imagenes prueba/a-1225983.jpg','assets/Imagenes prueba/ART-1435431.jpg','assets/Imagenes prueba/anime-1562445.jpg','assets/Imagenes prueba/anime-girl-1275977.jpg']
    },
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['nubaldo','rojo','tarde'],price: 6,color:'rojo nublado',url:'assets/Imagenes prueba/ai-art-clouds-colorful-sky-2226902.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['japones','torres','poblado'],price: 2,color:'torre japones',url:'assets/Imagenes prueba/anime-1562445.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['tarde','luciernagas','tarde'],price: 7,color:'atardecer luciernagas',url:'assets/Imagenes prueba/anime-girl-1275977.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['fantasia','barco','cielo'],price: 3,color:'barco',url:'assets/Imagenes prueba/anime-girl-sky-1275967.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['cosmico','morado','planeta'],price: 8,color:'cosmico morado',url:'assets/Imagenes prueba/ART-1435431.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['fantasia','montañoso','subreal'],price: 4,color:'fantasia azul',url:'assets/Imagenes prueba/artwork-digital-art-nature-anime-2238164.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['noche','fantasia','ballenas','subreal'],price: 9,color:'constelacion ballenas',url:'assets/Imagenes prueba/artwork-digital-art-rocks-nature-whale-animals-water-2230288.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['estrellas','decierto','noche'],price: 5,color:'decierto estrellado',url:'assets/Imagenes prueba/astronomy-Milky-Way-nature-lake-mountain-1212379.jpg',extraurl:['hola']},
    {text:['texto'],text2:['number'],caract:['hola','hola','hola'],tag:['ciudad','noche','iluminado'],price: 10,color:'ciudad noche',url:'assets/Imagenes prueba/city-1266869.jpg',extraurl:['hola']}
  ];

  nombre: string;
  reputacion: number;
  ubicacion: string;
  contacto: number;

  buyman: Buyman[] = [

    {nombre:'cristian',reputacion:10,ubicacion:'colombia',stock:10,color:'azul atardecer'},
    {nombre:'camilo',reputacion:8,ubicacion:'japon',stock:20,color:'rojo nublado'},
    {nombre:'destrom',reputacion:5,ubicacion:'mexico',stock:30,color:'torre japones'},
    {nombre:'paco',reputacion:10,ubicacion:'alemania',stock:40,color:'atardecer luciernagas'},
    {nombre:'maria',reputacion:1,ubicacion:'china',stock:50,color:'barco'},
    {nombre:'jose',reputacion:8,ubicacion:'ecuador',stock:60,color:'cosmico morado'},
    {nombre:'luis',reputacion:9,ubicacion:'chile',stock:70,color:'fantasia azul'},
    {nombre:'rail',reputacion:2,ubicacion:'usa',stock:80,color:'constelacion ballenas'},
    {nombre:'marina',reputacion:4,ubicacion:'suecia',stock:90,color:'decierto estrellado'},
    {nombre:'tao',reputacion:100,ubicacion:'china',stock:100,color:'ciudad noche'}

    ];

  descripcion: any [];
  opiniones: any [];
  opcompra: string;

  productbuy: ProductBuy[] = [

    {titulodescripcion:['estado','color','garantia','cuotas','memoria'],descripcion:['nuevo','azul','1 año','no','100gb'],nombreopiniones:['miguel','raul'],opiniones:['07 may 2023','06 may 2023'],opcoment:["el producto es bueno","el producto es malo"],oprate:[5,2],descripciontext:this.texttest,color:'azul atardecer',ubicacion:'colombia',rate:4},
    {titulodescripcion:['estado','color'],descripcion:['hola2','hola2'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'rojo nublado',ubicacion:'mexico',rate:2},
    {titulodescripcion:['estado','color'],descripcion:['hola3','hola3'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'ciudad noche',ubicacion:'brazil',rate:3},
    {titulodescripcion:['estado','color'],descripcion:['hola4','hola4'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'torre japones',ubicacion:'ecuador',rate:2},
    {titulodescripcion:['estado','color'],descripcion:['hola5','hola5'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'atardecer luciernagas',ubicacion:'venezuela',rate:1},
    {titulodescripcion:['estado','color'],descripcion:['hola6','hola6'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'barco',ubicacion:'canada',rate:2},
    {titulodescripcion:['estado','color'],descripcion:['hola7','hola7'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'cosmico morador',ubicacion:'usa',rate:0},
    {titulodescripcion:['estado','color'],descripcion:['hola8','hola8'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'fantasia azul',ubicacion:'argentina',rate:2},
    {titulodescripcion:['estado','color'],descripcion:['hola9','hola9'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'constelacion ballenas',ubicacion:'peru',rate:4},
    {titulodescripcion:['estado','color'],descripcion:['hola10','hola10'],nombreopiniones:['miguel','raul'],opiniones:['malo','bueno'],opcoment:[1,2],oprate:[1,2],descripciontext:this.texttest,color:'decierto estrellado',ubicacion:'uruguay',rate:2}

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

    //this.ratevalue = this.buyman[0].reputacion

    const found = this.buyman.find((obj) => {
      return obj.color === `${this.id}` ;
    });


    if(found){

      this.ratevalue = found?.reputacion

    }

    const found3 = this.productbuy.find((obj) => {
      return obj.color === `${this.id}` ;
    });


    if(found3){

      this.starRating2 = found3?.rate

    }



    if(this.ratevalue >= 5){

      this.ratevalue = 5

    }else if(this.ratevalue == 4){

      this.ratevalue = 3

    }else if(this.ratevalue == 1){

      this.ratevalue = 0

    }

    const foundday = this.productbuy.find((obj) => {
      return obj.color === `${this.id}` ;
    });


    if(foundday){

      this.daytime = foundday?.ubicacion

    }

    const foundfc = this.productbuy.find((obj) => {
      return obj.color === `${this.id}` ;
    });


    if(foundfc){

      this.tablefc = foundfc?.descripcion

    }



    if(this.daytime === "colombia"){

      this.daytime = "hoy"

    }else if(this.daytime === "mexico"){

      this.daytime = "semana"

    }else if(this.daytime === "brazil"){

      this.daytime = "4 dias"

    }

    setTimeout(()=>{

      this.myFunction()
      this.myFunction2()

     },500)



    //this.myFunction()

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

   myFunction() {

    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("buyerTable");

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = 'Reputacion:';
    cell1.style.textAlign = "center";
    cell1.style.fontWeight = "bold";
    cell1.style.padding = "20px";

    if(this.ratevalue == 5){

      cell2.innerHTML = '<td scope="row" style="text-align:left;padding: 5px;text-transform: capitalize;font-weight: bold;height: 100px;">' +
      '<div style="background-color: white;position: absolute;margin-left:20px;width: 130px;height: 50px;margin-top:-20px;border-radius:30px"></div>' +
      '<div class="bar front expert" data-skill="&nbsp;" style="width: 125px;position: absolute;margin-top:-18px;margin-left:23px;"></div>' +
      '</td>';

    }else if(this.ratevalue == 3){

      cell2.innerHTML = '<td scope="row" style="text-align:left;padding: 5px;text-transform: capitalize;font-weight: bold;">' +
      '<div style="background-color: white;position: absolute;margin-left:20px;width: 130px;height: 50px;margin-top:-20px;border-radius:30px"></div>' +
      '<div class="bar back intermediate" data-skill="&nbsp;" style="width: 125px;position: absolute;margin-top:-18px;margin-left:23px;"></div>' +
      '</td>'

    }else if(this.ratevalue == 0){

      cell2.innerHTML = '<td scope="row" style="text-align:left;padding: 5px;text-transform: capitalize;font-weight: bold;">' +
      '<div style="background-color: white;position: absolute;margin-left:20px;width: 130px;height: 50px;margin-top:-20px;border-radius:30px"></div>' +
      '<div class="bar learning" data-skill="&nbsp;" style="width: 125px;position: absolute;margin-top:-18px;margin-left:23px;"></div>' +
      '</td>'

    }



  }

  myFunction2() {

    var tablefc2: HTMLTableElement = <HTMLTableElement> document.getElementById("tablefc2");

    var row = tablefc2.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    /*cell1.innerHTML = 'Reputacion:';
    cell1.style.textAlign = "center";
    cell1.style.fontWeight = "bold";
    cell1.style.padding = "20px";*/


    if(this.tablefc%2!=0){

      cell1.innerHTML = ' '
      cell1.style.height = "100px";

      //'<tr> <th>1</th>'

      cell2.innerHTML = ' '

      //'<td style="text-align: left;scope="row">2</td> </tr>'

    }

  }


}


