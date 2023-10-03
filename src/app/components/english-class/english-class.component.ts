import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { PruebaObject,MemoriGame } from 'src/app/avatar.model';
import * as $ from 'jquery';
//import * as MemorizePage1 from 'src/assets/MemorizePage1.json';
import * as MemorizePage1 from 'src/assets/100-WordsMoreUsed.json';
//import * as XLSX from 'ts-xlsx';
import * as XLSX from 'xlsx';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';
import { GoogleService, GoogleObj } from './google.services';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-english-class',
  templateUrl: './english-class.component.html',
  styleUrls: ['./english-class.component.css'],
  providers: [GoogleService]
})
export class EnglishClassComponent implements OnInit {

  @ViewChild('titleContainer', { static: true }) public titleContainer: any;

  public googleObj: GoogleObj = new GoogleObj();
  public key: string;
  public result = '';
  private btnSubmit: any;



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

  public minimo:any = 0

  public arrayedit3: Array<number> = [0,6,0,8,0,10,0,12,0,14];

  public arraytest: Array<String> = [];
  public arraytestradius: Array<number> = [];

  //valores English Game

  //Desde donde contar Has cuando Contar
  public DesdeN:number = 0
  public HastaN:number = 7//99//7

  //Array para evitar que los valores se repitan
  public listaword:number[] = [];

  //catar maximo del array
  public arrayex:number //99//7
  //indicador del valor leido en el array
  public turnword:number= 0
  //valor para saber cual es el numero mayor del array
  public maxarray:number//99//7

  public scoreplus:number = 0
  public scorenegative:number = 0

  public scoreplusRes:number = 0
  public scorenegativeRes:number = 0

  public newRoundActive = false

  public ExcelActivation = true
  public ExcelUpdate = 1
  public FixedMax = 0;
  public FixedMax2 = 0;



  arrayBuffer:any;
  file:File;

  public NewArray = false
  public FirtsTry = false
  public FinalQuest = false

  public timeRound = 0;
  public nextRound = true;

  public NewRoundBox = false

  public LasyRound = 0;

  public changeRangeFix = 0;

  MemoriGamesize:number;

  public errorArray:number[] = []

  PruebaObject: PruebaObject[] = [

    {Titulo:['hola'],Radius:['hola','hola','hola'],Text:['tarde','ciudad','azulado'],Image:['hola']},

  ]

  public MemoriGame: MemoriGame[] /*= /*MemorizePage1*/

  /*[

    {English:'bring',Espanol:'traer'},
    {English:'though',Espanol:'aunque'},
    {English:'since',Espanol:'desde'},
    {English:'however',Espanol:'sin embargo'},
    {English:'whether',Espanol:'si'},
    {English:'lead',Espanol:'dirigir'},
    {English:'appear',Espanol:'aparecer'},

  ]*/

  public maximo:any


  public arrayedit: ['no','borrar','caos','orden'];
  public radusid: number = 0;
  public contradius: number = 0;

  public MemoriGameData:any;
  studentData:any;
  public url: string;
  public list: string


  constructor(
    private http: HttpClient,
    private elementRef:ElementRef,
    private _google: GoogleService,
    private actRoute: ActivatedRoute,
    ) {

  }

  ngOnInit(): void {


    this.actRoute.params.subscribe(params => {

      this.list = params['list'];

     });

     if(this.list === "100"){

      this.url = `/assets/${this.list}-WordsMoreUsed.json`

      this.http.get(this.url).subscribe(res => {

        this.MemoriGameData = res;
        this.MemoriGame = this.MemoriGameData;
        this.turnword = 0

      });

    }




    this.actRoute.params.subscribe(params => {

      const list: string = params['list'];

    if(list === "100"){

      //this.MemoriGame = this.MemoriGameData

    }else{

      this.MemoriGame =
      [
        {English:'bring',Espanol:'traer'},
        {English:'though',Espanol:'aunque'},
        {English:'since',Espanol:'desde'},
        {English:'however',Espanol:'sin embargo'},
        {English:'whether',Espanol:'si'},
        {English:'lead',Espanol:'dirigir'},
        {English:'appear',Espanol:'aparecer'},
      ]

    }

  });

      /*

        this.MemoriGame = MemorizePage1

        this.FixedMax = 3

        this.FixedMax2 = 2

        this.changeRangeFix = 2

        this.turnword = 0

      */



    setTimeout(()=>{

      this.maximo = Object.keys(this.MemoriGame).length

      this.ExcelUpdate = 5

      this.maxarray = this.MemoriGame.length
      this.arrayex = this.MemoriGame.length

    try {

      this.btnSubmit = document.getElementById('btnSubmit');

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

      this.turnword = this.MemoriGame.length - 1

      this.NewQuest()
      this.NewQuest()

    } catch (error) {

      alert("error al cargar recarge la pagina")

    }

    },2000)




  }

  /*send() {
    this.btnSubmit.disabled = true;
    this._google.translate(this.googleObj, this.key).subscribe(
      (res: any) => {
        this.btnSubmit.disabled = false;
        this.result = res.data.translations[0].translatedText;
      },
      err => {
        console.log(err);
      }
    );
  }*/

  //funcion para calcular un nuevo palabras principal
  getRandomInt(max:number,min:number) {



    //designa la palabra principal
    this.word = this.listaword[this.turnword]

    //asigna el numero menor del ciclo for
    let i = min
    //asigna el numero mayor del ciclo for
    let z = max

    console.log(z + "= z")
    // aumenta el indice que decide el valor que se muestra del array
    this.turnword ++

    if(this.NewArray){

      this.turnword = z
      //this.NewQuest()

    }

    var x = max-min
    console.log(x + "= x")

    //condicinal para saber si el indice en igual al valor maximo
    if(this.turnword >= x){

      if(this.ExcelUpdate == 2){
      this.ExcelActivation = true
      }
      //alert(this.ExcelActivation)
      this.ExcelUpdate = this.ExcelUpdate + 1

      this.timeRound = this.timeRound + 1

      this.FirtsTry = true


      if(this.NewArray){
      this.NewArray = false
      }
      //restable el indice
      this.turnword = 0


      //alert("terminado")



      //elimina todos los valores del array
      this.listaword = this.listaword.filter(word => word > (this.maxarray+2));

      //ciclo de llenado del array
      for (i ; i < z ; i++) {

        this.listaword.push(i)

      }

      //modifica el array para revolver de manera aleatoria los valores
      this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});

      //console.log("sucedio")

      if(this.NewRoundBox){

        this.newRoundActive = true;

      }

    }

  if(this.FirtsTry){

    if(this.turnword == 1){

      //console.log("terminado");

      //this.FinalQuest = true

    if(this.timeRound >= 2){

      this.NewRoundBox = true;
      this.newRoundActive = true;
      alert("Nueva Ronda");
      this.scoreplus = -1


    }else{

      this.scoreplus = 0

    }


      this.scorenegative = 0

      const itemScorenegative: HTMLElement = document.getElementById('scorenegative') as HTMLElement


      itemScorenegative.innerHTML = `0`

      /*var box = document?.getElementById('resultbox') as HTMLElement;

      box.style.display = '';

      var box2 = document?.getElementById('questbox') as HTMLElement;

      box2.style.display = 'none';

      var box2 = document?.getElementById('pointBox') as HTMLElement;

      box2.style.display = 'none';*/

    }

  }



    //muestra el turno actual
    console.log(this.turnword)
    //console.log(this.listaword)

  }



  //funcion para llenar la respuestas
  getRandomIntBox(max:any,min:any) {

    //console.log(this.MemoriGame)

    while(this.wordnumber.length < 4){

      this.wordbox2 = Math.floor(Math.random() * (max-min) + min);
      /*console.log(min)
      console.log(max)*/



    //determina si entre las respuesta esta la correcta si no remplaza una respuesta.
    if(!this.wordnumber.includes(this.wordbox2)){

          this.wordnumber.push(this.wordbox2)
          this.wordstring.push(this.MemoriGame[this.wordbox2].English!)

          //console.log(this.wordstring)

        }

    }

    if(!this.wordstring.includes(this.MemoriGame[this.word].English!)){

        this.wordbox2 = Math.floor(Math.random() * 4);
        this.wordnumber.splice(this.wordbox2,0,this.word)

        //console.log(this.wordnumber)


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

      try {

        if(this.timeRound >= 2){

          if(this.nextRound){

            this.scoreplus = 0
            //alert("se termino la primera ronda")
            this.nextRound = false
            //alert(this.scoreplus)

          }

        }

        var box = document?.getElementById('questbox') as HTMLElement;
        var box2 = document?.getElementById('imagecorrect') as HTMLElement;


        True.innerHTML =  "<span style='color: green;'>Correcto</span>";
        box.style.display = 'none';
        box2.style.display = '';

        setTimeout(()=>{

          this.NewQuest();

        },500)

        setTimeout(()=>{

        this.scoreplus = this.scoreplus + 1

        this.scoreplusRes = this.scoreplusRes + 1

        itemScoreplus.innerHTML = `${this.scoreplus}`

        setTimeout(()=>{

          box.style.display = '';
          box2.style.display = 'none';

         // console.log(this.NewRoundBox)
         // console.log(this.newRoundActive)

        //alert(this.NewRoundBox + " " + this.newRoundActive + " " + this.ExcelActivation)
        console.log(this.NewRoundBox + " " + this.newRoundActive + " " + this.ExcelActivation)
        console.log(this.LasyRound)

          if(this.NewRoundBox){

            if(this.newRoundActive){

              this.LasyRound = this.LasyRound + 1

              if(this.LasyRound >= 1){

                //alert(1)

                if(this.ExcelActivation){

                  //alert(2)

                  if(this.ExcelUpdate >= 5){

                    //alert(3)

                    this.NewRound()

                  }


                }


              }



            }

          }


         },1000)

        },1000)





      } catch (e: any) {

        //console.log(e.name + this.listaword[this.turnword]);
        //console.log(e.message + this.listaword[this.turnword]);

        console.log("error")
        alert("error: " + this.turnword)

        setTimeout(()=>{

          box.style.display = '';
          box2.style.display = 'none';
          this.turnword = this.turnword-1
          this.NewQuest();

         },4000)

        /*this.errorArray.push(this.turnword)

        True.innerHTML =  "<span style='color: green;'>Correcto</span>";
        const box = document?.getElementById('questbox') as HTMLElement;
        const box2 = document?.getElementById('imagecorrect') as HTMLElement;
        box.style.display = 'none';
        box2.style.display = '';
        this.scoreplus = this.scoreplus + 1
        itemScoreplus.innerHTML = `${this.scoreplus}`

        this.NewQuest();

        setTimeout(()=>{

          box.style.display = '';
          box2.style.display = 'none';

         },1500)*/


      }




    }else{

      True.innerHTML =  "<span style='color: red;'>Incorrecto</span>";
      this.scorenegative = this.scorenegative + 1
      this.scorenegativeRes = this.scorenegativeRes + 1
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




try {

  this.getRandomInt(this.maximo-(this.FixedMax2),this.minimo)

} catch (error) {

  console.log("palabra")

}

try {

  this.getRandomIntBox(this.maximo-(this.FixedMax),this.minimo)

} catch (error) {

  console.log("caja")

}




      /*console.log(this.minimo)
      console.log(this.maximo-2)*/




    //console.log(this.maximo +" "+ this.minimo)

    RandonWord.innerHTML = this.MemoriGame[this.word].English!

    const item1: HTMLElement = document.getElementById('item1-q') as HTMLElement
    const item2: HTMLElement = document.getElementById('item2-q') as HTMLElement
    const item3: HTMLElement = document.getElementById('item3-q') as HTMLElement
    const item4: HTMLElement = document.getElementById('item4-q') as HTMLElement

    item1.innerHTML =  `<span style='color: black;font-family: Georgia, serif;font-size:1.3em'>${this.MemoriGame[this.wordnumber[0]].Espanol}</span>`
    item2.innerHTML =  `<span style='color: black;font-family: Georgia, serif;font-size:1.3em'>${this.MemoriGame[this.wordnumber[1]].Espanol}</span>`
    item3.innerHTML =  `<span style='color: black;font-family: Georgia, serif;font-size:1.3em'>${this.MemoriGame[this.wordnumber[2]].Espanol}</span>`
    item4.innerHTML =  `<span style='color: black;font-family: Georgia, serif;font-size:1.3em'>${this.MemoriGame[this.wordnumber[3]].Espanol}</span>`




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

            for(const key in this.MemoriGame){

              delete this.MemoriGame[key].English

            }


            this.MemoriGame = XLSX.utils.sheet_to_json(worksheet,{raw:true})

            //tamaño del array
            this.MemoriGamesize = this.MemoriGame.length

            this.maxarray = this.MemoriGamesize

            this.ChangeRandomNormal(1,this.MemoriGamesize)


            this.NewArray = true

            alert("Palabras Cargadas");



            setTimeout(()=>{

              //this.ExcelActivation = false;
              this.ExcelUpdate = 5

              this.NewQuest();
              this.NewQuest();




             },500)



        }

        fileReader.readAsArrayBuffer(this.file);



}

ChangeRandom(){

  //alert(this.NewRoundBox + " " + this.newRoundActive + " " + this.ExcelActivation)

  //this.ExcelActivation = false

  const Desde: HTMLInputElement = document.getElementById('Desde') as HTMLInputElement
  const Hasta: HTMLInputElement = document.getElementById('Hasta') as HTMLInputElement

  const validationDesde: HTMLElement = document.getElementById('validationDesde') as HTMLElement
  const validation4: HTMLElement = document.getElementById('validation4') as HTMLElement
  const validation5: HTMLElement = document.getElementById('validation5') as HTMLElement

  const scoreplus: HTMLElement = document.getElementById("scoreplus") as HTMLElement
  const scorenegative: HTMLElement = document.getElementById("scorenegative") as HTMLElement

   this.DesdeN = +Desde.value - 1
   this.HastaN = +Hasta.value

  if(((this.HastaN+1) - (this.DesdeN+1)) <= 3){

    console.log("el rango de datos no puede ser inferior a 4")
    validation4.style.display = '';
    //console.log(((this.HastaN+1) - (this.DesdeN+1)))

  }else if((this.DesdeN+1) == 0){

    console.log("el valor minimo es uno")
    validationDesde.style.display = '';

  }else if(this.HastaN > this.MemoriGame.length){

    console.log("el valor minimo es uno")
    validation5.style.display = '';

  }else{

    validation4.style.display = 'none';
    validationDesde.style.display = 'none';
    validation5.style.display = 'none';

    this.minimo = this.DesdeN
    this.maximo = this.HastaN + this.changeRangeFix

    //console.log("correcto")

    this.timeRound = 1

    setTimeout(()=>{

      this.scoreplus = 0
      this.scoreplusRes = 0
      this.scorenegative = 0
      this.scorenegativeRes = 0

      scoreplus.innerHTML = `${this.scoreplus}`
      scorenegative.innerHTML = `${this.scorenegative}`

         },1000)


    this.newRoundActive = false
    this.NewRoundBox = false
    this.LasyRound = -1 * ((this.maximo-this.minimo)-1);

      //console.log(this.LasyRound + "changeR")
      this.turnword = this.maximo-1
      this.getRandomInt(this.maximo,this.minimo);
      this.NewQuest()

      // alert(this.NewRoundBox + " " + this.newRoundActive + " " + this.ExcelActivation)




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

    //console.log("correcto")

    this.listaword = this.listaword.filter(word => word > (Hasta+1));

    for (let i = 0; i < Hasta; i++) {

      this.listaword.push(i)

    }

    //console.log("sucedio 2")
    this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});


    this.newRoundActive = false
    this.NewRoundBox = false
    this.LasyRound = -1 * ((this.maximo-this.minimo)-1);

    this.turnword = 0
    this.NewQuest()

    /*this.timeRound = 1
    this.NewRoundBox = false
    this.scoreplus = 0*/


  }



}



NewRound(){

  var box = document?.getElementById('resultbox') as HTMLElement;
  var resultadolabel = document?.getElementById('resultadolabel') as HTMLElement;
  var marcadorlabel = document?.getElementById('marcadorlabel') as HTMLElement;

  resultadolabel.style.display = '';
  marcadorlabel.style.display = 'none';
  box.style.display = '';

  var scoreplus = document?.getElementById("scoreplus")?.textContent;
  var scorenegative = document?.getElementById("scorenegative")?.textContent;

  var scoreplusR = document?.getElementById('scoreplusR') as HTMLElement;
  var scorenegativeR = document?.getElementById('scorenegativeR') as HTMLElement;

  if(scoreplus && scorenegative){

    scoreplusR.innerHTML = `${this.scoreplusRes}`
    scorenegativeR.innerHTML = `${this.scorenegativeRes}`

  }



  var box2 = document?.getElementById('questbox') as HTMLElement;

  box2.style.display = 'none';

 /* var box3 = document?.getElementById('pointBox') as HTMLElement;

  box3.style.display = 'none';*/


}

NewRound2(){


  this.LasyRound = -1

  var box = document?.getElementById('resultbox') as HTMLElement;

  box.style.display = 'none';

  var box2 = document?.getElementById('questbox') as HTMLElement;

  box2.style.display = '';

  var box2 = document?.getElementById('pointBox') as HTMLElement;

  box2.style.display = '';

  var resultadolabel = document?.getElementById('resultadolabel') as HTMLElement;

  resultadolabel.style.display = 'none';

  var marcadorlabel = document?.getElementById('marcadorlabel') as HTMLElement;

  marcadorlabel.style.display = '';


  this.newRoundActive = false

  this.scoreplusRes = 0
  this.scorenegativeRes = 0

}

refresh(){
  window.location.reload();
}

chargeTableOn(){

  var tableWords = document?.getElementById('tableWords') as HTMLElement;
  var GameBox = document?.getElementById('GameBox') as HTMLElement;
  var tableBtn = document?.getElementById('tableBtn') as HTMLElement;

  tableWords.style.display = '';
  tableBtn.style.display = 'none';
  GameBox.style.display = 'none';

}

chargeTableOff(){

  var tableWords = document?.getElementById('tableWords') as HTMLElement;
  var GameBox = document?.getElementById('GameBox') as HTMLElement;
  var tableBtn = document?.getElementById('tableBtn') as HTMLElement;

  tableWords.style.display = 'none';
  GameBox.style.display = '';
  tableBtn.style.display = '';

}

}

