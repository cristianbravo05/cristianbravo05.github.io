import { Component, OnInit } from '@angular/core';
import * as MemorizePage1 from 'src/assets/100-WordsMoreUsed.json';
import { PruebaObject,MemoriGame,PERSONS, Person } from 'src/app/avatar.model';
import { HttpClient } from '@angular/common/http';
import {ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
//import * as MemorizePage1 from 'src/assets/MemorizePage1.json';
//import * as XLSX from 'ts-xlsx';
import * as XLSX from 'xlsx';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ActivatedRoute } from '@angular/router';
import { ExcelService } from './excel.service';
import { StringUtils } from 'turbocommons-ts';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {


  public MemoriGame: MemoriGame[] /*= [{English:"hello",Espanol:"hola"}]*/
  public MemoriGame2: MemoriGame[] /*= [{English:"hello",Espanol:"hola"}]*/

  //public title = 'json-read-example';
  public studentData:any;
  public url: string;
  //public url: string = '/assets/100-WordsMoreUsed.json';

  DesdeN: any
  HastaN: any
  PercentN: any

  persons: Person[];
  ArrayPercent: number[] = [0];


  public studentData2:any;

  wordbox2: number

  min: number
  max: number

  arrayword: string

  FinalPercent: number = 0
  NewPercent: number = 0
  times: number = 0

  constructor(
    private excelService: ExcelService,
    private http: HttpClient,
    private elementRef:ElementRef,
    private actRoute: ActivatedRoute) {

      this.excelService = excelService;
      this.persons = PERSONS;

     }

  ngOnInit():  void {

    //console.log(StringUtils.compareByLevenshtein('abcdefg', 'xabxcdxxefxgx'));
    //console.log(StringUtils.compareSimilarityPercent('abc', 'axc'));

   /* console.log(StringUtils.compareSimilarityPercent('abcdefg', 'xabxcdxxefxgx'));
    console.log(StringUtils.compareSimilarityPercent('abc', 'axc'));
    console.log(StringUtils.compareSimilarityPercent('a', 'b'));
    console.log(StringUtils.compareSimilarityPercent('abcde', 'abcd'));*/

    //----------------------------------------------------------------------//

      this.url = `/assets/100-WordsMoreUsed.json`

      this.http.get(this.url).subscribe(res => {

        this.studentData = res;
        this.MemoriGame2 = this.studentData

      });

      this.max = 98
      this.min = 0

      this.NewQuest()

      const rate = document.getElementById('rate') as HTMLInputElement

      rate.value = "1"

      //this.times = 0

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

  exportToExcel() {
    this.excelService.exportAsExcelFile(this.MemoriGame, 'ListaNueva');
  }

  ChangeWord(){

    const RandonWord = document?.getElementById("RandonWord")?.textContent;
    const rate = (document.getElementById('rate') as HTMLInputElement).value

      if(this.wordbox2){

        var RandonWord2 = new SpeechSynthesisUtterance(this.MemoriGame2[this.wordbox2].English)
        var voices = window.speechSynthesis.getVoices()
         //RandonWord2.voice = voices[6]
        RandonWord2.lang = "en-US";
        RandonWord2.rate = +rate
        window.speechSynthesis.speak(RandonWord2)
       // window.speechSynthesis.rate

      }

  }

  ChangeWord2(){

    const RandonWord = document?.getElementById("RandonWord")?.textContent;
    const rate = (document.getElementById('rate') as HTMLInputElement).value

    //RandonWord.innerHTML = this.MemoriGame[this.word].Espanol

    if(RandonWord){

      var RandonWord2 = new SpeechSynthesisUtterance(RandonWord)
      var voices = window.speechSynthesis.getVoices()
      //RandonWord2.voice = voices[6]
      RandonWord2.lang = "en-US";
      RandonWord2.rate = +rate
      window.speechSynthesis.speak(RandonWord2)
      //speechSynthesis.speak(new SpeechSynthesisUtterance(RandonWord2))

    }


  }

  NewQuest(){


    this.FinalPercent = 0

    this.wordbox2 = Math.floor(Math.random() * (this.max-this.min) + this.min);

    var Percent: HTMLInputElement = document.getElementById('Percent') as HTMLInputElement
    var CorrectPercent: HTMLInputElement = document.getElementById('CorrectPercent') as HTMLInputElement

    if(Percent){

       Percent.value = ""

    }

    for(let b of this.ArrayPercent){

      this.FinalPercent = Math.floor(b) + this.FinalPercent

    }

    //this.FinalPercent = this.FinalPercent / this.times

    //alert(this.times)

    if(this.times > 0){

    CorrectPercent.innerHTML = `${Math.floor(this.FinalPercent / (this.ArrayPercent.length-1))}%`

    console.log(this.ArrayPercent)

    }

    this.times  = this.times + 1
    //alert(this.times)

  }

  CorrectAnswer(){

    const Percent: HTMLInputElement = document.getElementById('Percent') as HTMLInputElement

    this.PercentN = Percent.value

    if(this.MemoriGame2[this.wordbox2].English != null){

      this.arrayword = `${this.MemoriGame2[this.wordbox2].English}`

    }

    //console.log(StringUtils.compareSimilarityPercent(this.PercentN, this.wordbox2));

    //alert(StringUtils.compareSimilarityPercent(this.PercentN,this.arrayword) + "% De acierto")

    this.NewPercent = StringUtils.compareSimilarityPercent(this.PercentN,this.arrayword)

    this.ArrayPercent.push(this.NewPercent)

    this.NewQuest()

    const currentWord: HTMLInputElement = document.getElementById('currentWord') as HTMLInputElement
    const percentResult: HTMLInputElement = document.getElementById('percentResult') as HTMLInputElement

    currentWord.innerHTML = `${this.arrayword}`
    percentResult.innerHTML = `${Math.floor(this.NewPercent)}%`

    //console.log(this.ArrayPercent)
    //console.log(this.times)


  }



  speak() {

     const text = document?.getElementById('text')?.textContent;
     const rate = (document.getElementById('rate') as HTMLInputElement).value

    if(this.wordbox2){

      if(text){

      var RandonWord2 = new SpeechSynthesisUtterance(text)
      RandonWord2.lang = "en-US";
      RandonWord2.rate = +rate
      window.speechSynthesis.speak(RandonWord2)

      }
    }

  }


}
