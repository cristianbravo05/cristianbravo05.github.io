import { Component, OnInit } from '@angular/core';
import * as MemorizePage1 from 'src/assets/100-WordsMoreUsed.json';
import { PruebaObject,MemoriGame } from 'src/app/avatar.model';
import { HttpClient } from '@angular/common/http';
import {ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
//import * as MemorizePage1 from 'src/assets/MemorizePage1.json';
//import * as XLSX from 'ts-xlsx';
import * as XLSX from 'xlsx';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-english-table',
  templateUrl: './english-table.component.html',
  styleUrls: ['./english-table.component.css']
})
export class EnglishTableComponent implements OnInit {

  public MemoriGame: MemoriGame[]
  public MemoriGame2: MemoriGame[]
  public MemoriGame3: MemoriGame[]

  //public title = 'json-read-example';
  public studentData:any;
  public studentData2:any;
  public url: string;
  //public url: string = '/assets/100-WordsMoreUsed.json';

  DesdeN: any
  HastaN: any

  constructor(
    private http: HttpClient,
    private elementRef:ElementRef,
    private actRoute: ActivatedRoute){ }



  ngOnInit(): void {



    this.actRoute.params.subscribe(params => {

      const list: string = params['list'];
      const type: string = params['type'];

      if(type === "item"){

        this.url = `/assets/${list}-CommonWordsEn.json`

      }else if(type === "conn"){

        this.url = `/assets/${list}-Connectors.json`

      }else if(type === "adj"){

        this.url = `/assets/${list}-AbjsMoreUsed.json`

      }else{

        this.url = `/assets/${list}-WordsMoreUsed.json`

      }

      this.http.get(this.url).subscribe(res => {

        this.studentData = res;
        this.MemoriGame2 = this.studentData

      });

    });

  }

  borrarCell(d:any){

    const index = this.MemoriGame2.indexOf(d);
    this.MemoriGame2.splice(index, 1);

  }

  addWord(){

    const Desde: HTMLInputElement = document.getElementById('Desde') as HTMLInputElement
    const Hasta: HTMLInputElement = document.getElementById('Hasta') as HTMLInputElement

    this.DesdeN = Desde.value
    this.HastaN = Hasta.value


    this.studentData2 = {English:this.DesdeN,Espanol:this.HastaN}

    this.MemoriGame2.unshift(this.studentData2)

    console.log(this.MemoriGame2)

  }

  ChangeWord(b:any){


    const index = this.MemoriGame2.indexOf(b);

    if(this.MemoriGame2[index].English){

      var Word = new SpeechSynthesisUtterance(this.MemoriGame2[index].English)
      Word.lang = "en-US";
      window.speechSynthesis.speak(Word)

    }


  }

}
