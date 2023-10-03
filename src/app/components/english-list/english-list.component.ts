import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english-list',
  templateUrl: './english-list.component.html',
  styleUrls: ['./english-list.component.css']
})
export class EnglishListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("buyerTable");

    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = 'Reputacion del vendedor:';
    cell1.style.textAlign = "center";
    cell1.style.fontWeight = "bold";
    cell1.style.padding = "20px";

    cell2.innerHTML = `<td scope="row" style="text-align:left;padding: 5px;text-transform: capitalize;font-weight: bold;">` +
    `<div style="background-color: white;position: absolute;margin-left:5px;width: 130px;height: 50px;margin-top:-20px;border-radius:30px"></div>` +
    `<div class="bar front expert" data-skill="&nbsp;" style="width: 125px;position: absolute;margin-top:-18px;margin-left:8px;"></div>` +
    `</td>`;

  }

  borrarCell(a:number){

    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("buyerTable");

    table.deleteRow(a);

  }



}
