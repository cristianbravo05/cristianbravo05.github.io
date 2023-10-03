import { Component, OnInit } from '@angular/core';
import { MemoriGame } from 'src/app/avatar.model';
import { HttpClient } from '@angular/common/http';
import { ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StringUtils } from 'turbocommons-ts';
import { Text } from '@angular/compiler';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-listening-game',
  templateUrl: './listening-game.component.html',
  styleUrls: ['./listening-game.component.css']
})
export class ListeningGameComponent implements OnInit {


  public MemoriGame: MemoriGame[] /*= [{English:"hello",Espanol:"hola"}]*/
  public MemoriGame2: MemoriGame[] /*= [{English:"hello",Espanol:"hola"}]*/

  public studentData:any;
  public url: string;

  DesdeN: any
  HastaN: any
  PercentN: any
  PercentN2: any

  ArrayPercent: number[] = [0];


  public studentData2:any;

  wordbox2: number

  min: number
  max: number

  arrayword: string

  FinalPercent: number = 0
  NewPercent: number = 0
  times: number = 0

  listaword: number[] = []

  z:number = 0
  i:number = 0
  i2:number = 0
  x:number

  starpage:boolean = true

  finalpage:boolean = false

  timeslate:number = 0

  arrayword2:any

  Numero  = 0;

  lastitem = false

  finalitem: string;

  porcentajes: number = 0;
  finalporcentaje: number = 0;

  file:File;
  arrayBuffer:any;


  constructor(
    private http: HttpClient,
    private elementRef:ElementRef,
    private actRoute: ActivatedRoute) {


     }

  ngOnInit():  void {

      this.url = `/assets/100-WordsMoreUsed.json`

      this.http.get(this.url).subscribe(res => {

        this.studentData = res;
        this.MemoriGame2 = this.studentData
        //this.z = this.MemoriGame2.length
        this.z = 10

        //console.log(this.z)

        this.max = 98
        this.min = 0



       /* var i = 0

        console.log(this.z)

        for (i ; i < this.z ; i++) {

          this.listaword.push(i)

        }

        this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});*/

        this.x = this.z - this.i

        this.getNewRound(this.times)

        this.NewQuest(3)

        const rate = document.getElementById('rate') as HTMLInputElement

        rate.value = "1"



        /*for (var i=0 ; i < this.z ; i++) {

          console.log(this.MemoriGame2[this.listaword[i]].English + " = " + i)

        }*/

        //console.log(this.listaword)
        //this.times = 0
        //console.log(this.times)


      });




  }

  borrarCell(d:any){

    const index = this.MemoriGame.indexOf(d);
    this.MemoriGame.splice(index, 1);

  }

  addWord(){

    const Desde: HTMLInputElement = document.getElementById('Desde') as HTMLInputElement
    const Hasta: HTMLInputElement = document.getElementById('Hasta') as HTMLInputElement

    this.DesdeN = Desde.value
    this.HastaN = Hasta.value


    this.studentData = {English:this.DesdeN,Espanol:this.HastaN}

    if(this.MemoriGame == null){

      this.MemoriGame = [{English:this.DesdeN,Espanol:this.HastaN}]

    }else{

      this.MemoriGame.unshift(this.studentData)

    }



    //console.log(this.MemoriGame)

  }

  createExcel(){

    console.log(this.MemoriGame)

  }

  ChangeWord(){

    const RandonWord = document?.getElementById("RandonWord")?.textContent;
    const rate = (document.getElementById('rate') as HTMLInputElement).value


      if(this.wordbox2){

        if(this.wordbox2 == 0){

          var RandonWord2 = new SpeechSynthesisUtterance(this.MemoriGame2[0].English)

        }else{

          var RandonWord2 = new SpeechSynthesisUtterance(this.MemoriGame2[this.wordbox2].English)

        }

        var voices = window.speechSynthesis.getVoices()
         //RandonWord2.voice = voices[6]
        RandonWord2.lang = "en-US";
        RandonWord2.rate = +rate
        window.speechSynthesis.speak(RandonWord2)
       // window.speechSynthesis.rate
       console.log(this.MemoriGame2[0].English)

      }

  }

  NewQuest(answer:number){

      const currentWord: HTMLInputElement = document.getElementById('currentWord') as HTMLInputElement
      const percentResult: HTMLInputElement = document.getElementById('percentResult') as HTMLInputElement
      const btnAnswer: HTMLInputElement = document.getElementById('btnAnswer') as HTMLInputElement
      const btnNew: HTMLInputElement = document.getElementById('btnNew') as HTMLInputElement
      const PalabraGame: HTMLInputElement = document.getElementById('PalabraGame') as HTMLInputElement
      const PorcentGame: HTMLInputElement = document.getElementById('PorcentGame') as HTMLInputElement

      var CorrectPercent: HTMLInputElement = document.getElementById('CorrectPercent') as HTMLInputElement


    if(this.finalpage){

      this.finalpage = false

      PalabraGame.innerHTML = `Palabra:`
      PorcentGame.innerHTML = `% de Acierto:`

      currentWord.innerHTML = ``
      percentResult.innerHTML = ``
      CorrectPercent.innerHTML = `0%`

      btnAnswer.innerHTML = "Responder"

      btnNew.style.display = ""

      //this.ArrayPercent = this.ArrayPercent.filter(word => word > (101));

      //this.ArrayPercent.length = 0;

      //this.FinalPercent = 0;

      this.porcentajes = 0
      this.finalporcentaje = 0

      this.NewQuest(3)

    }else if(this.lastitem){

      //this.finalitem = this.MemoriGame2[this.listaword[this.z]].English!


      alert("Ronda Terminada" + this.times)

      this.finalpage = true

      this.lastitem = false

      currentWord.innerHTML = ``
      PalabraGame.innerHTML = `Resultado`
      PorcentGame.innerHTML = ``
      percentResult.innerHTML = `Procentaje total de la Ronda: <br> ${`${Math.floor(this.FinalPercent / (this.ArrayPercent.length-1))}%`}`

      btnAnswer.innerHTML = "Nueva Ronda"

      btnNew.style.display = "none"

    }else{

    //calcular procentaje de acierto final

    this.wordbox2 = this.listaword[this.times]

    var Percent: HTMLInputElement = document.getElementById('Percent') as HTMLInputElement


    const currentWord: HTMLInputElement = document.getElementById('currentWord') as HTMLInputElement
    const percentResult: HTMLInputElement = document.getElementById('percentResult') as HTMLInputElement


    if(Percent){

      if(answer == 1){

        this.FinalPercent = 0

        var Percent: HTMLInputElement = document.getElementById('Percent') as HTMLInputElement

        this.PercentN = Percent.value

        this.NewPercent = StringUtils.compareSimilarityPercent(this.PercentN,this.arrayword)

        this.ArrayPercent.push(this.NewPercent)

        this.porcentajes = Math.floor(this.NewPercent) + Math.floor(this.porcentajes)

      }

      Percent.value = ""

    }

    for(let b of this.ArrayPercent){

      this.FinalPercent = Math.floor(b) + this.FinalPercent

    }

    if(this.times > 0){

      //CorrectPercent.innerHTML = `${Math.floor(this.FinalPercent / (this.ArrayPercent.length-1))}%`

      this.finalporcentaje = this.porcentajes/this.times
      CorrectPercent.innerHTML = `${Math.floor(this.finalporcentaje)}%`

      console.log(this.finalporcentaje)

    }

    //crear palabra

    if(this.MemoriGame2[this.wordbox2].English != null){

      try {

          this.arrayword = `${this.MemoriGame2[this.wordbox2].English}`

      } catch (error) {

        console.log("error nueva pregunta")
        console.log(this.times + "= error")

      }

    }

    //calcula el porcentaje de hacierto actual

    if(answer == 1){


      if(this.times == 0){

        this.arrayword2 = `${this.MemoriGame2[this.listaword[this.times]].English}`


      }else{

        this.arrayword2 = `${this.MemoriGame2[this.listaword[this.times-1]].English}`


      }


      console.log(this.times)
      currentWord.innerHTML = `${this.arrayword2}`
      percentResult.innerHTML = `${Math.floor(this.NewPercent)}%`

    }


    this.times  = this.times + 1

    this.getNewRound(this.times)

    const Suma: HTMLInputElement = document.getElementById('suma') as HTMLInputElement

    Suma.innerHTML = `${this.MemoriGame2[this.wordbox2].English}`

    console.log(this.times)
    console.log(this.arrayword)

  }

  }

  getNewRound(time:number) {

    //var x = this.z

    //alert(this.x + " " + this.z)

    //this.x = this.z

    //alert(this.x)

    if(time == this.x || this.starpage){

      this.listaword = this.listaword.filter(word => word > (100));

      //var i:number = 0

      //alert(this.i)

      //alert(this.i + " " + this.x)

      if(this.DesdeN != null){

        this.i = this.DesdeN

        //alert("null " + this.DesdeN + " " + this.z)


      }else{

        this.i = 0

        //alert("0 " + this.i + " " + this.z)

      }

      for (this.i ; this.i < this.z ; this.i++) {

        this.listaword.push(this.i)

      }

      //console.log(this.listaword)

      this.listaword = this.listaword.sort(function() {return Math.random() - 0.5});

      //this.i2 = 0
      //alert(this.i2)

      this.i2 = 0

      for (this.i2 ; this.i2 < this.x ; this.i2++) {

        //console.log(this.MemoriGame2[this.listaword[this.i2]].English + " = " + this.i2)

      }

      //console.log("nueva array")
      //alert("nueva array = " +  time)
      console.log(this.listaword)

      if(!this.starpage){

        this.lastitem = true
        //alert("hola")
      }

      this.starpage = false
      this.times = 0

    }

  }

  ChangeRandom(){

    //alert(this.NewRoundBox + " " + this.newRoundActive + " " + this.ExcelActivation)

    //this.ExcelActivation = false

    const Desde: HTMLInputElement = document.getElementById('Desde') as HTMLInputElement
    const Hasta: HTMLInputElement = document.getElementById('Hasta') as HTMLInputElement

    const validationDesde: HTMLElement = document.getElementById('validationDesde') as HTMLElement
    const validation4: HTMLElement = document.getElementById('validation4') as HTMLElement
    const validation5: HTMLElement = document.getElementById('validation5') as HTMLElement

    const CorrectPercent: HTMLInputElement = document.getElementById('CorrectPercent') as HTMLInputElement
    const currentWord: HTMLInputElement = document.getElementById('currentWord') as HTMLInputElement
    const percentResult: HTMLInputElement = document.getElementById('percentResult') as HTMLInputElement

    const blogcard: HTMLInputElement = document.getElementById('blogcard') as HTMLInputElement

    var sizeblogcard = 330

     this.DesdeN = +Desde.value - 1
     this.HastaN = +Hasta.value

    if(((this.HastaN+1) - (this.DesdeN+1)) <= 3){

      console.log("el rango de datos no puede ser inferior a 4")
      validation4.style.display = '';
      blogcard.style.height = `${sizeblogcard}px`


    }else if((this.DesdeN+1) == 0){

      console.log("el valor minimo es uno")
      validationDesde.style.display = '';
      blogcard.style.height = `${sizeblogcard}px`


    }else if(this.HastaN > this.MemoriGame2.length){

      console.log("el valor no puede ser mayor que los datos")
      validation5.style.display = '';
      blogcard.style.height = `${sizeblogcard}px`


    }else{

      validation4.style.display = 'none';
      validationDesde.style.display = 'none';
      validation5.style.display = 'none';

      CorrectPercent.innerHTML = ""
      currentWord.innerHTML = ""
      percentResult.innerHTML = ""


      this.z = this.HastaN
      this.i = this.DesdeN
      //this.i2 = this.DesdeN

      this.x = this.z - this.i

      this.times = 0

      this.porcentajes = 0;
      this.finalporcentaje = 0;

      this.starpage = true

      //this.getNewRound(0)
      //this.NewQuest(3)
      this.NewQuest(3)
      this.NewQuest(3)

    }



  }

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

            alert("Palabras Cargadas");

            setTimeout(()=>{

              this.z = this.MemoriGame.length
              this.i = 0
              this.MemoriGame2 = this.MemoriGame
              //this.i2 = this.DesdeN

              this.x = this.z - this.i

              this.times = 0

              this.porcentajes = 0;
              this.finalporcentaje = 0;

              this.starpage = true

              this.NewQuest(3);
              this.NewQuest(3);

             },500)



        }

        fileReader.readAsArrayBuffer(this.file);



}

}

