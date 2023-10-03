import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-creator',
  templateUrl: './seller-creator.component.html',
  styleUrls: ['./seller-creator.component.css']
})
export class SellerCreatorComponent implements OnInit {


  array:any[]
  inputs:any
  index:any

  ngOnInit() {

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

    console.log(this.array)

  }



}
