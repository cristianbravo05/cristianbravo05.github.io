import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { PruebaObject,MemoriGame } from 'src/app/avatar.model';
import * as $ from 'jquery';
import * as MemorizePage1 from 'src/assets/MemorizePage1.json';
//import * as XLSX from 'ts-xlsx';
import * as XLSX from 'xlsx';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BuyPageComponent implements OnInit {

  @ViewChild('titleContainer', { static: true }) public titleContainer: any;

  public newTitleElem: any =['1','2','3','4','5','6','7','8'];
  public newDivElem: any =['1','2','3','4','5','6','7','8'];
  public newTitleElem2: any =['1','2','3','4','5','6','7','8'];
  public newDivElem2: any =['1','2','3','4','5','6','7','8'];
  public newBoxElem: any =['1','2','3','4','5','6','7','8'];
  public title: string = 'HTML';
  public title2: string = 'C#';
  public title3: string = 'JAVA';
  public element: string;
  public icont: number = 4;
  public Divicont: number = 4;
  public elementbox: number = 1;
  public element2: string;
  public icont2: number = 4;
  public Divicont2: number = 4;
  public elementbox2: number = 1;
  public boxnumber: number =1;
  public box: number = 5;
  myTemplate  = '';
  myTemplate1  =  '';
  public headingTags = [
    { title_size: "h1" },
    { title_size: "h2" },
    { title_size: "h3" },
    { title_size: "h4" },
    { title_size: "h5" },
    { title_size: "h6" }
  ];
  public borrari: number;
  public borrari2: number;
  public borrarbox: number;
  public createtimes: number = 0;
  public current2: number = 0;
  public word: number = 0;
  public wordbox: number = 0;
  public wordbox2: number = 0;
  public wordnumber:number[] = [];
  public wordstring:string[] = [];
  public wordsee: number = 0;
  public numberword:number = 0

  public minimo:any = 1

  public arrayedit3: Array<number> = [0,6,0,8,0,10,0,12,0,14];

  public arraytest: Array<String> = [];
  public arraytestradius: Array<number> = [];

  //valores English Game

  //Desde donde contar Has cuando Contar
  public DesdeN:number = 0
  public HastaN:number = 7

  //Array para evitar que los valores se repitan
  public listaword:number[] = [];

  //catar maximo del array
  public arrayex:number= 7
  //indicador del valor leido en el array
  public turnword:number= 0
  //valor para saber cual es el numero mayor del array
  public maxarray:number = 7

  public scoreplus:number = 0
  public scorenegative:number = 0

  arrayBuffer:any;
  file:File;

  MemoriGamesize:number;

  PruebaObject: PruebaObject[] = [

    {Titulo:['hola'],Radius:['hola','hola','hola'],Text:['tarde','ciudad','azulado'],Image:['hola']},

  ]

  public MemoriGame: MemoriGame[] = /*MemorizePage1*/

  [

    {English:'bring',Espanol:'traer'},
    {English:'though',Espanol:'aunque'},
    {English:'since',Espanol:'desde'},
    {English:'however',Espanol:'sin embargo'},
    {English:'whether',Espanol:'si'},
    {English:'lead',Espanol:'dirigir'},
    {English:'appear',Espanol:'aparecer'},

  ]

  public maximo:any = Object.keys(this.MemoriGame).length


  public arrayedit: ['no','borrar','caos','orden'];
  public radusid: number = 0;
  public contradius: number = 0;


  constructor(private elementRef:ElementRef) {

  }

  ngOnInit(): void {

    for (let i = 0; i < this.arrayex; i++) {
      this.listaword.push(i)
    }

    this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});

    const RandonWord: HTMLElement = document.getElementById('RandonWord') as HTMLElement

    this.getRandomInt(this.maximo,this.minimo)
    this.MemoriGamesize = this.MemoriGame.length
    this.getRandomIntBox(this.maximo,this.minimo)

    RandonWord.innerHTML = this.MemoriGame[this.word].English!

    const item1: HTMLElement = document.getElementById('item1-q') as HTMLElement
    const item2: HTMLElement = document.getElementById('item2-q') as HTMLElement
    const item3: HTMLElement = document.getElementById('item3-q') as HTMLElement
    const item4: HTMLElement = document.getElementById('item4-q') as HTMLElement
    const item5: HTMLElement = document.getElementById('item5-q') as HTMLElement



    //this.getRandomIntBox(Object.keys(this.MemoriGame).length)
    item1.innerHTML = `<span style='color: black;font-family: Georgia, serif;font-size:1.3em'>${this.MemoriGame[this.wordnumber[0]].Espanol}</span>`

    //this.getRandomIntBox(Object.keys(this.MemoriGame).length)
    item2.innerHTML = `<span style='color: black;font-family: Georgia, serif;font-size:1.3em''>${this.MemoriGame[this.wordnumber[1]].Espanol}</span>`

    //this.getRandomIntBox(Object.keys(this.MemoriGame).length)
    item3.innerHTML = `<span style='color: black;font-family: Georgia, serif;font-size:1.3em''>${this.MemoriGame[this.wordnumber[2]].Espanol}</span>`

    //this.getRandomIntBox(Object.keys(this.MemoriGame).length)
    item4.innerHTML = `<span style='color: black;font-family: Georgia, serif;font-size:1.3em''>${this.MemoriGame[this.wordnumber[3]].Espanol}</span>`

    item5.innerHTML = `<span style='color: black;font-family: Georgia, serif;font-size:1.3em''>Nueva Pregunta</span>`

    //const RandonWord = document.getElementById("RandonWord");

    this.newTitleElem[1] = document.createElement(this.headingTags[0].title_size);
    this.newTitleElem[1].innerHTML = `<span class="red">${this.title}</span>`;
    this.titleContainer.nativeElement.appendChild(this.newTitleElem[1]);


    this.newTitleElem[1] = document.createElement(this.headingTags[2].title_size);
    this.newTitleElem[1].innerHTML =
      '<input type="radio" id="html" name="fav_language" class="txtres red" style="margin-left: 20px;text-indent: 10px;" ></input >'
    + `<label class="txtres" for="html"> ${this.title}</label><br>`
    + '<input class="txtres" type="radio" id="css" name="fav_language" value="CSS" style="margin-left: 20px;text-indent: 10px;">'
    + '<label class="txtres" for="css"> CSS</label><br>'
    + '<input class="txtres" type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: 20px;text-indent: 10px;">'
    + '<label class="txtres" for="javascript"> JavaScript</label>'
    + '<br>';
    this.titleContainer.nativeElement.appendChild(this.newTitleElem[1]);



    //this.element =`<${this.headingTags[2].title_size} class="red">${this.title}</${this.headingTags[2].title_size}>`;

     /*this.newTitleElem[6] = document.createElement(this.headingTags[2].title_size);
    this.newTitleElem[6].innerHTML =
    `<button id="hola" (click)="deleteoption(${5})">Get Template</button>`
    this.titleContainer.nativeElement.appendChild(this.newTitleElem[6]);*/


  }

  addoption(){



    this.newTitleElem[2] = document.createElement(this.headingTags[2].title_size);
    this.newTitleElem[2].innerHTML =
      '<input type="radio" id="html" name="fav_language" class="txtres red" style="margin-left: 20px;text-indent: 10px;" ></input >'
    + `<label class="txtres" for="html"> ${this.title2}</label><br>`
    + '<br>';
    this.titleContainer.nativeElement.appendChild(this.newTitleElem[2]);


  }

  deleteoption(i:any){

    this.newTitleElem[i].remove();
    const elements = document.getElementById(`moveme${i}`);
    elements?.remove();
    console.log(i)

  }

  optainvalue(label:any){

    label = this.borrari
    console.log(label)

  }

  plus(){

    this.elementbox ++
    console.log(this.elementbox)

  }

  newRadiosOption(){

    this.arraytest.push("radius");
    this.arraytestradius.push(0);

    this.icont2 ++;

    this.newBoxElem.push("box"+this.icont2)

    this.borrarbox = this.icont2;

    this.newBoxElem[this.icont2] = document.createElement(this.headingTags[2].title_size);
    this.newBoxElem[this.icont2].innerHTML =

      `<div class="margenitem txtres box${this.icont2}" id="box${this.icont2}" ><h1>New Radius Option ${this.icont2}</h1>`
    + '<div style="margin-button:-100px">'
    + `<button class="nomar txtres" type="button" id="createoption${this.icont2}" (click)="addoption2()" (click)="editbox(${this.icont2})">New<img style="width: 50px; height: auto;" src="assets/imagenes iconos/agregar.png"></button> `
    + `<button class="nomar txtres editbox${this.icont2}" id="editbox${this.icont2}" (click)="editbox(${this.icont2})"><h1><img style="width: 50px; height: auto;margin-left: 50px" src="assets/imagenes iconos/editar.png"></h1></button>`
    + `<button class="nomar txtres deletebox${this.icont2}" id="deletebox${this.icont2}" (click)="deletebox(${this.icont2})" ><h1><img style="width: 50px; height: auto;margin-left: 50px" src="assets/imagenes iconos/delete.png"></h1></button>`
    + '</div>'
    + `</div>`
      this.titleContainer.nativeElement.appendChild(this.newBoxElem[this.icont2]);

      this.elementRef.nativeElement.querySelector(`#createoption${this.icont2}`).addEventListener('click', this.addoption2.bind(this));

  }

  newRadiosOption2(){

    this.arraytest.push("text");
    this.arraytestradius.push(1);
    this.radusid ++;

    this.icont2 ++;

    this.newBoxElem.push("box"+this.icont2)

    this.borrarbox = this.icont2;

    this.newBoxElem[this.icont2] = document.createElement(this.headingTags[2].title_size);
    this.newBoxElem[this.icont2].innerHTML =

  /*    `<div class="box${this.icont2}" id="box${this.icont2}"><h1>New Radius Option ${this.icont2}</h1>`
    + `<button type="button" id="createoption${this.icont2}" (click)="addoption2()" (click)="editbox(${this.icont2})">New option 2</button> `
    + `<button class="editbox${this.icont2}" id="editbox${this.icont2}" (click)="editbox(${this.icont2})"><h1>Edit Radius ${this.icont2}</h1></button>`
    + `<button class="deletebox${this.icont2}" id="deletebox${this.icont2}" (click)="deletebox(${this.icont2})"><h1>Delete ${this.icont2}</h1></button>`
    + `</div>`*/

     `<div class="txtres margenitem box${this.icont2}" id="box${this.icont2}"><h1>New Title${this.icont2}</h1>`
   + `<label class="txtres" for="html"> Titulo Numero ${this.icont2}</label><br>`
   + `<button class="txtres editbox${this.icont2}" id="editbox${this.icont2}" (click)="editbox(${this.icont2})"><h1>Edit Radius ${this.icont2}</h1></button>`
   + `<button class="txtres deletebox${this.icont2}" id="deletebox${this.icont2}" (click)="deletebox(${this.icont2})"><h1>Delete ${this.icont2}</h1></button>`
   + `</div>`

      this.titleContainer.nativeElement.appendChild(this.newBoxElem[this.icont2]);

      this.elementRef.nativeElement.querySelector(`#createoption${this.icont2}`).addEventListener('click', this.addoption2.bind(this));

  }

  borrar(){

    //document.getElementsByName("fav_language")?.remove();

    const elements = document.getElementById("box5");
    /*while(elements.length > 0){
        elements[0].parentNode?.removeChild(elements[0]);
    }*/
    elements?.remove();

    console.log(elements)

  }

  deletebox(i:any){

    //document.getElementsByName("fav_language")?.remove();

    const elements = document.getElementById(`box${i}`);
    /*while(elements.length > 0){
        elements[0].parentNode?.removeChild(elements[0]);
    }*/
    elements?.remove();

    console.log(elements)

    delete this.arraytest[i-5];

    //this.arraytest = this.arraytest.filter((letter) => letter);

    console.log(i-5)

  }

  editbox(i:any){

    this.box = i

    console.log(this.box)

  }


  addoption2(){


    this.contradius ++;

    this.arraytestradius.splice(this.radusid,1,this.contradius)

    this.icont ++;

    if(this.elementbox = 1){

      this.Divicont ++;
      this.elementbox ++;

    }

    this.borrari = this.icont;
    this.newTitleElem.push(this.icont)

    this.newTitleElem[this.icont] = document.createElement(this.headingTags[2].title_size);
    this.newTitleElem[this.icont].innerHTML =


      `<div id="moveme${this.icont}" class="margenitem txtres fav_language${this.Divicont}" style="margin-bottom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               :-100px">`
    + `<input type="radio" id="html" name="fav_language" class="txtres red language" style="margin-left: 20px;text-indent: 10px;" ></input >`
    + `<label class="txtres" for="html">&nbsp; ${this.title3}</label><br>`
    + `<br>`
    + '<div class="grid-containerv">'
    + `<label class="txtres item1" for="html" id="idlabel"  (click)="optainvalue(labelicon)" #labelicon> ${this.icont}</label><br>`
    + `<br>`
    + `<button class="txtres item2 nomar" type="button" id="borrar${this.icont}" (click)="deleteoption(${this.borrari})"><img style="width: 50px; height: auto" src="assets/imagenes iconos/delete.png"></button>`
    +  '</div>'
    +  '</div>';


    this.titleContainer.nativeElement.appendChild(this.newTitleElem[this.icont]);

    $(`#moveme${this.icont}`).appendTo(`#box${this.box}`);

    this.borrari = this.icont;




  }

  addoption3(){



    this.icont ++;

    if(this.elementbox = 1){

      this.Divicont ++;
      this.elementbox ++;

    }

    this.borrari = this.icont;
    this.newTitleElem.push(this.icont)

    this.newTitleElem[this.icont] = document.createElement(this.headingTags[2].title_size);
    this.newTitleElem[this.icont].innerHTML =


      `<div id="moveme${this.icont}" class="txtres fav_language${this.Divicont}">`
    + `<input type="radio" id="html" name="fav_language" class="txtres red language" style="margin-left: 20px;text-indent: 10px;" ></input >`
    + `<label class="txtres" for="html"> ${this.title3}</label><br>`
    + `<br>`
    + `<label class="txtres" for="html" id="idlabel"  (click)="optainvalue(labelicon)" #labelicon> ${this.icont}</label><br>`
    + `<br>`
    + `<input class="txtres" type="text" id="fname${this.icont}" name="fname" #borrarid>`
    + `<button class="txtres" type="button" id="borrar${this.icont}" (click)="deleteoption(${this.borrari})">Delete option</button>`
    +  '</div>';


    this.titleContainer.nativeElement.appendChild(this.newTitleElem[this.icont]);

    $(`#moveme${this.icont}`).appendTo(`#box${this.box}`);

    this.borrari = this.icont;




  }

  /*openAlert() {
    console.log("adios")
  }*/

  /*addTemplate(){
     this.myTemplate  = '<button type="button" id="my-button" (click)="openAlert()">click mee</buttn>';
  }*/

  addTemplate1(){
    this.myTemplate1  =  `<button type="button" id="borrar-button" (click)="deleteoption(${this.borrari})">click mee</buttn> `;
  }

  /*ngAfterViewChecked (){
    if(this.elementRef.nativeElement.querySelector('#my-button')){
      this.elementRef.nativeElement.querySelector('#my-button').addEventListener('click', this.openAlert.bind(this));
    }
    if(this.elementRef.nativeElement.querySelector('#hola') | this.elementRef.nativeElement.querySelector('#hola1') ||  this.elementRef.nativeElement.querySelector('#my-button') || this.elementRef.nativeElement.querySelector('#borrar-button')){
      this.elementRef.nativeElement.querySelector('#hola').addEventListener('click', this.addTemplate.bind(this));
      this.elementRef.nativeElement.querySelector('#hola1').addEventListener('click', this.deleteoption.bind(this,this.borrari));
      this.elementRef.nativeElement.querySelector('#my-button').addEventListener('click', this.openAlert.bind(this));
      this.elementRef.nativeElement.querySelector('#borrar-button').addEventListener('click', this.deleteoption.bind(this,this.borrari));
    }
  }*/

  ngAfterViewChecked(){

    if( this.elementRef.nativeElement.querySelector(`#borrar${this.icont}`) /*|| this.elementRef.nativeElement.querySelector('#borrar-button') || this.elementRef.nativeElement.querySelector('#idlabel')*/){
      this.elementRef.nativeElement.querySelector(`#borrar${this.icont}`).addEventListener('click', this.deleteoption.bind(this,this.borrari));

      //this.elementRef.nativeElement.querySelector('#idlabel').addEventListener('click', this.optainvalue.bind(this));
      //this.elementRef.nativeElement.querySelector('#borrar-button').addEventListener('click', this.deleteoption.bind(this,this.borrari));
    }if( this.elementRef.nativeElement.querySelector(`#editbox${this.icont2}`) /*|| this.elementRef.nativeElement.querySelector('#borrar-button') || this.elementRef.nativeElement.querySelector('#idlabel')*/){
      this.elementRef.nativeElement.querySelector(`#editbox${this.icont2}`).addEventListener('click', this.editbox.bind(this,this.borrarbox));

      //this.elementRef.nativeElement.querySelector('#idlabel').addEventListener('click', this.optainvalue.bind(this));
      //this.elementRef.nativeElement.querySelector('#borrar-button').addEventListener('click', this.deleteoption.bind(this,this.borrari));
    }if( this.elementRef.nativeElement.querySelector(`#deletebox${this.icont2}`) /*|| this.elementRef.nativeElement.querySelector('#borrar-button') || this.elementRef.nativeElement.querySelector('#idlabel')*/){
      this.elementRef.nativeElement.querySelector(`#deletebox${this.icont2}`).addEventListener('click', this.deletebox.bind(this,this.borrarbox));

      //this.elementRef.nativeElement.querySelector('#idlabel').addEventListener('click', this.optainvalue.bind(this));
      //this.elementRef.nativeElement.querySelector('#borrar-button').addEventListener('click', this.deleteoption.bind(this,this.borrari));
    }//if( this.elementRef.nativeElement.querySelector(`#createoption${this.icont2}`) /*|| this.elementRef.nativeElement.querySelector('#borrar-button') || this.elementRef.nativeElement.querySelector('#idlabel')*/){

      /*if(this.createtimes==0){*/

     //   this.elementRef.nativeElement.querySelector(`#createoption${this.icont2}`).addEventListener('click', this.editbox.bind(this,this.borrarbox));
       // this.createtimes ++
       // console.log(this.createtimes)

      /*}*/

      //this.elementRef.nativeElement.querySelector(`#createoption${this.icont2}`).addEventListener('click', this.addoption2.bind(this));
      //this.elementRef.nativeElement.querySelector('#idlabel').addEventListener('click', this.optainvalue.bind(this));
      //this.elementRef.nativeElement.querySelector('#borrar-button').addEventListener('click', this.deleteoption.bind(this,this.borrari));
    //  }






  }


  EditObject(){

    /*for (let i = 0; i < this.arrayedit.length; i++) {
      console.log(this.arrayedit[i]);
    }

   let num_array: Array<number> = [
      23, 756, 232, 67, 99, 32, 1, 54, 87, 98, 321, 1, 12, 55, 6, 5,
   ];*/



  let arrayedit: Array<string> = ['text','radius','text','radius','text','radius','text','radius','text','radius'];
  let arrayedit2: Array<number> = [0,1,0,2,0,3,0,4,0,5];



   //console.log(arrayedit)

  let current: number = 0;

  let radiusedit = 5;

  for (let num of arrayedit) {

    /*if (num == 'caos') {
        console.log(num)
        delete arrayedit[current]
        arrayedit.push('hola')
        arrayedit.splice(2,0,'luz')
    }*/

    current++;


 if(num == 'text'){

    setTimeout(()=>{

      this.newRadiosOption2()

    },100)

   }else if(num == 'radius'){

    setTimeout(()=>{

      this.newRadiosOption()

    },100)


   }

}

  for (let num2 of arrayedit2) {


    if(num2 > 0){

      let current3 = this.current2





        for (let i = 0; i < num2; i++) {

             setTimeout(()=>{

             this.editbox(this.arrayedit3[current3]);
             this.addoption2();

            },200)

           }





      }

      this.current2 = this.current2 + 1

      console.log(this.current2)

  }

   // var filtered = arrayedit.filter((letter) => letter);
   // console.log(filtered)

  }

  GenerateObject(){

    console.log(this.arraytest);
    console.log(this.arraytestradius);

  }

  //funcion para calcular un nuevo palabras principal
  getRandomInt(max:number,min:number) {

    //designa la palabra principal
    this.word = this.listaword[this.turnword]

    //asigna el numero menor del ciclo for
    let i = min
    //asigna el numero mayor del ciclo for
    let z = max

    // aumenta el indice que decide el valor que se muestra del array
    this.turnword ++

    //condicinal para saber si el indice en igual al valor maximo
    if(this.turnword == z){

      //restable el indice
      this.turnword = 0

      //elimina todos los valores del array
      this.listaword = this.listaword.filter(word => word > (this.maxarray+1));

      //ciclo de llenado del array
      for (i ; i < z ; i++) {

        this.listaword.push(i)

      }

      //modifica el array para revolver de manera aleatoria los valores
      this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});

      console.log("sucedio")


    }

    //muestra el turno actual
    console.log(this.turnword)
    console.log(this.listaword)

  }

  //funcion para llenar la respuestas
  getRandomIntBox(max:any,min:any) {

    while(this.wordnumber.length < 4){

      this.wordbox2 = Math.floor(Math.random() * (max-min) + min);

    //determina si entre las respuesta esta la correcta si no remplaza una respuesta.
    if(!this.wordnumber.includes(this.wordbox2)){

          this.wordnumber.push(this.wordbox2)
          this.wordstring.push(this.MemoriGame[this.wordbox2].English!)

        }

    }

    if(!this.wordstring.includes(this.MemoriGame[this.word].English!)){

        this.wordbox2 = Math.floor(Math.random() * 4);
        this.wordnumber.splice(this.wordbox2,0,this.word)


      }






  }


  //muestra el resultado si se cliclea un la pregunta
  ChangeWord(){

    const RandonWord = document?.getElementById("RandonWord")?.textContent;

    //RandonWord.innerHTML = this.MemoriGame[this.word].Espanol

    if(RandonWord){

      var RandonWord2 = new SpeechSynthesisUtterance(RandonWord)
      var voices = window.speechSynthesis.getVoices()
      //RandonWord2.voice = voices[6]
      RandonWord2.lang = "en-US";
      window.speechSynthesis.speak(RandonWord2)
      //speechSynthesis.speak(new SpeechSynthesisUtterance(RandonWord2))

    }


  }

  //funcion que muestra si la opcion seleccionada es la correcta o no
  TrueAnswer(id:string){

    const True = document.getElementById(id) as HTMLElement;
    const True2 = document?.getElementById(id)?.textContent;
    const itemScoreplus: HTMLElement = document.getElementById('scoreplus') as HTMLElement
    const itemScorenegative: HTMLElement = document.getElementById('scorenegative') as HTMLElement





    if(True2 === this.MemoriGame[this.word].Espanol){

      True.innerHTML =  "<span style='color: green;'>Correcto</span>";
      const box = document?.getElementById('questbox') as HTMLElement;
      const box2 = document?.getElementById('imagecorrect') as HTMLElement;
      box.style.display = 'none';
      box2.style.display = '';
      this.NewQuest();
      this.scoreplus = this.scoreplus + 1
      itemScoreplus.innerHTML = `${this.scoreplus}`

      setTimeout(()=>{

        box.style.display = '';
        box2.style.display = 'none';


       },1500)


    }else{

      True.innerHTML =  "<span style='color: red;'>Incorrecto</span>";
      this.scorenegative = this.scorenegative + 1
      itemScorenegative.innerHTML = `${this.scorenegative}`

    }



  }

  //genera una nueva pregunta
  NewQuest(){

     this.word = 0;
     this.wordbox = 0;
     this.wordbox2 = 0;
     this.wordnumber = [];
     this.wordstring = [];
     this.wordsee = 0;
     this.numberword = 0;

    const RandonWord: HTMLElement = document.getElementById('RandonWord') as HTMLElement

    this.getRandomInt(this.maximo,this.minimo)
    this.getRandomIntBox(this.maximo,this.minimo)

    console.log(this.maximo +" "+ this.minimo)

    RandonWord.innerHTML = this.MemoriGame[this.word].English!

    const item1: HTMLElement = document.getElementById('item1-q') as HTMLElement
    const item2: HTMLElement = document.getElementById('item2-q') as HTMLElement
    const item3: HTMLElement = document.getElementById('item3-q') as HTMLElement
    const item4: HTMLElement = document.getElementById('item4-q') as HTMLElement

    item1.innerHTML = `<span style='color: black;'>${this.MemoriGame[this.wordnumber[0]].Espanol}</span>`
    item2.innerHTML = `<span style='color: black;'>${this.MemoriGame[this.wordnumber[1]].Espanol}</span>`
    item3.innerHTML = `<span style='color: black;'>${this.MemoriGame[this.wordnumber[2]].Espanol}</span>`
    item4.innerHTML = `<span style='color: black;'>${this.MemoriGame[this.wordnumber[3]].Espanol}</span>`




  }

  //Dectecta que la se cargo un nuevo archivo
  incomingfile(event:any)
  {
  this.file= event.target.files[0];
  const FileUploaded: HTMLElement = document.getElementById('FileUploaded') as HTMLElement
  const Correcto: HTMLElement = document.getElementById('correcto') as HTMLElement
  FileUploaded.innerHTML =
    `<span>Archivo Cargado:&nbsp;</span>` + `<p style="color: green;margin-bottom: -1px;">✓</p>`
  }

  //Carga el archivo y lo cambierte en un objeto
  Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
            this.MemoriGame = XLSX.utils.sheet_to_json(worksheet,{raw:true})

            //tamaño del array
            this.MemoriGamesize = this.MemoriGame.length

            this.maxarray = this.MemoriGamesize

            this.ChangeRandomNormal(1,this.MemoriGamesize)





        }

        fileReader.readAsArrayBuffer(this.file);



}

ChangeRandom(){

  const Desde: HTMLInputElement = document.getElementById('Desde') as HTMLInputElement
  const Hasta: HTMLInputElement = document.getElementById('Hasta') as HTMLInputElement

  const validationDesde: HTMLElement = document.getElementById('validationDesde') as HTMLElement
  const validation4: HTMLElement = document.getElementById('validation4') as HTMLElement

   this.DesdeN = +Desde.value - 1
   this.HastaN = +Hasta.value

  if(((this.HastaN+1) - (this.DesdeN+1)) <= 3){

    console.log("el rango de datos no puede ser inferior a 4")
    validation4.style.display = '';
    console.log(((this.HastaN+1) - (this.DesdeN+1)))

  }else if((this.DesdeN+1) == 0){

    console.log("el valor minimo es uno")
    validationDesde.style.display = '';

  }else{

    validation4.style.display = 'none';
    validationDesde.style.display = 'none';

    this.minimo = this.DesdeN
    this.maximo = this.HastaN

    console.log("correcto")

    this.turnword = this.maximo-1
    this.getRandomInt(this.maximo,this.minimo);
    this.NewQuest()


  }



}

ChangeRandomNormal(Desde:number,Hasta:number){


  if(((Hasta) - (Desde)) <= 3){

    console.log("error -3")

  }else if((Desde) == 0){

    console.log("error 0")

  }else{



    this.minimo = Desde-1
    this.maximo = Hasta

    console.log("correcto")

    this.listaword = this.listaword.filter(word => word > (Hasta+1));

    for (let i = 0; i < Hasta; i++) {

      this.listaword.push(i)



    }

    console.log("sucedio 2")
    this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});

    this.NewQuest()
    this.turnword = 0





  }



}





}

