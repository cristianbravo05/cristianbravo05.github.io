import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar.service';
import { environment } from 'src/environments/environment';
import { PruebaObject,MemoriGame,PERSONS, Person,DescProduct } from 'src/app/avatar.model';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent implements OnInit {
  id!: number;
  data!: any;
  editAvatarForm!: FormGroup;
  public MemoriGame: MemoriGame[]
  public studentData:any;
  public descproduct: DescProduct[]
  public descproductData:any;

  idDesc:any = 0

  text1: string = ""
  text2: string = ""

  numbercreatir: number = 0

  DesdeN: any
  HastaN: any
  PercentN: any

  InpImg: any

  inedition: boolean = true

  index:any

  changeCount:boolean = false

  images:any =[];
  imagesactual:any =[];

  brakeblucle = true

  k = 0
  i2 = -1

  recarga = 0

  isOpen = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {
    this.editAvatarForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
      avatar2: ['', Validators.required],
      avatar3: ['', Validators.required],
      avatar4: ['', Validators.required],
      avatar5: ['', Validators.required],
      avatar6: ['', Validators.required],
      avatar7: ['', Validators.required],
      avatar8: ['', Validators.required],
      avatar9: ['', Validators.required],
      avatar10: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  uploadAvatar(event: any,numero: number) {

    const file = event.target.files[0];

    if(numero == 1){

      this.editAvatarForm.patchValue({
        avatar: file,
    });

    }else if(numero == 2){

      this.editAvatarForm.patchValue({
        avatar2: file,
      });

    }else if(numero == 3){

      this.editAvatarForm.patchValue({
        avatar3: file,
      });

    }else if(numero == 4){

      this.editAvatarForm.patchValue({
        avatar4: file,

      });

    }else if(numero == 5){

      this.editAvatarForm.patchValue({
        avatar5: file,
      });

    }else if(numero == 6){

      this.editAvatarForm.patchValue({
        avatar6: file,
      });

    }else if(numero == 7){

      this.editAvatarForm.patchValue({
        avatar7: file,
      });

    }else if(numero == 8){

      this.editAvatarForm.patchValue({
        avatar8: file,
      });

    }else if(numero == 9){

      this.editAvatarForm.patchValue({
        avatar9: file,
      });

    }else if(numero == 10){

      this.editAvatarForm.patchValue({
        avatar10: file,
      });

    }



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

  onSubmit2() {
    let formData = new FormData();
    formData.append('name', this.editAvatarForm.get('name')?.value);
    formData.append('avatar', this.editAvatarForm.get('avatar')?.value);
    formData.append('avatar2', this.editAvatarForm.get('avatar2')?.value);
    formData.append('avatar3', this.editAvatarForm.get('avatar3')?.value);
    formData.append('avatar4', this.editAvatarForm.get('avatar4')?.value);
    formData.append('avatar5', this.editAvatarForm.get('avatar5')?.value);
    formData.append('avatar6', this.editAvatarForm.get('avatar6')?.value);
    formData.append('avatar7', this.editAvatarForm.get('avatar7')?.value);
    formData.append('avatar8', this.editAvatarForm.get('avatar8')?.value);
    formData.append('avatar9', this.editAvatarForm.get('avatar9')?.value);
    formData.append('avatar10', this.editAvatarForm.get('avatar10')?.value);

    console.log(this.editAvatarForm.get('name')?.value);
    console.log(this.editAvatarForm.get('avatar')?.value);
    console.log(this.editAvatarForm.get('avatar2')?.value);
    console.log(this.editAvatarForm.get('avatar3')?.value);
    console.log(this.editAvatarForm.get('avatar4')?.value);
    console.log(this.editAvatarForm.get('avatar5')?.value);
    console.log(this.editAvatarForm.get('avatar6')?.value);
    console.log(this.editAvatarForm.get('avatar7')?.value);
    console.log(this.editAvatarForm.get('avatar8')?.value);
    console.log(this.editAvatarForm.get('avatar9')?.value);
    console.log(this.editAvatarForm.get('avatar10')?.value);



  }

  borrarCell(d:any){

    const index = this.MemoriGame.indexOf(d);
    this.MemoriGame.splice(index, 1);

  }

  addCell(d:any){

    const index = this.MemoriGame.indexOf(d);

    this.studentData = {English:"",Espanol:""}

    //this.MemoriGame.unshift(this.studentData)
    this.MemoriGame.splice(index,0,this.studentData)

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

  }

  transform(d:any){

    const endedit: HTMLInputElement = document.getElementById(`endedit`) as HTMLInputElement
    const btnNew: HTMLInputElement = document.getElementById(`btnNew`) as HTMLInputElement


    if(this.inedition){

      this.index = this.MemoriGame.indexOf(d);

      const text: HTMLInputElement = document.getElementById(`text${this.index}`) as HTMLInputElement
      const text2: HTMLInputElement = document.getElementById(`text2${this.index}`) as HTMLInputElement

      if(text.textContent){

        this.text1 = text.textContent

      }

      if(text2.textContent){

        this.text2 = text2.textContent

      }

      text.innerHTML = `<input type="text" id="label${this.index}" style="text-indent: 10px;background-color: white;" value="${this.text1}">`
      text2.innerHTML = `<input type="text" id="label2${this.index}" style="text-indent: 10px;background-color: white;" value="${this.text2}">`

      this.inedition = false

      endedit.style.display = "";
      btnNew.style.display = "none";

    }


  }

  indexOf(d:any){

    const index = this.MemoriGame.indexOf(d);

    return index

  }

  endedit(){

    this.inedition = true

    const endedit: HTMLInputElement = document.getElementById(`endedit`) as HTMLInputElement
    const btnNew: HTMLInputElement = document.getElementById(`btnNew`) as HTMLInputElement

    endedit.style.display = "none";

    const text: HTMLInputElement = document.getElementById(`label${this.index}`) as HTMLInputElement
    const text2: HTMLInputElement = document.getElementById(`label2${this.index}`) as HTMLInputElement

    this.studentData = {English:text.value,Espanol:text2.value}

    this.MemoriGame.splice(this.index, 1,this.studentData);

    text.remove()
    text2.remove()

    btnNew.style.display = "";

  }

  creatArray(){

    console.log(this.MemoriGame)

  }

  createNewElement(type:any){

    this.idDesc ++

    this.descproductData = {texto:'',tipo:type,id:this.idDesc}

    if(this.descproduct == null){

      this.descproduct = [{texto:'',tipo:type,id:this.idDesc}]

    }else{

      this.descproduct.push(this.descproductData)

    }



  }


  borrarCellDesc(d:any){

    const index = this.descproduct.indexOf(d);
    this.descproduct.splice(index, 1);

  }

  editarCellDesc(d:any){

    const index = this.descproduct.indexOf(d);
    //const btnNew: HTMLInputElement = document.getElementById(`btnNew`) as HTMLInputElement

    const text: HTMLInputElement = document.getElementById(`descitem${index}`) as HTMLInputElement
    const listemoji: HTMLInputElement = document.getElementById(`listemoji${index}`) as HTMLInputElement

    this.descproductData = {texto:text.value,tipo:this.descproduct[index].tipo,id:this.descproduct[index].id}
    listemoji.innerHTML = "✅"


    this.descproduct.splice(index, 1,this.descproductData);

    //btnNew.style.display = "";

  }

  indexOfDesc(d:any){

    const index = this.descproduct.indexOf(d);

    return index

  }

  creatArray2(){

    console.log(this.descproduct)

  }

  transformElement(d:any,e:any){

    const index = this.descproduct.indexOf(d);

    this.descproductData = {texto:"",tipo:e,id:this.descproduct[index].id}

    this.descproduct.splice(index, 1,this.descproductData);

  }

  addCell2(d:any){

    const index = this.descproduct.indexOf(d);

    this.descproductData = {texto:"",tipo:"0",id:"999"}

    //this.MemoriGame.unshift(this.studentData)
    this.descproduct.splice(index+1,0,this.descproductData)

  }

  changealert(d:any){

    const index = this.descproduct.indexOf(d);

    const listemoji: HTMLInputElement = document.getElementById(`listemoji${index}`) as HTMLInputElement

    listemoji.innerHTML = "❌"

  }

  imagedata(){

    var fileInput = (<HTMLInputElement>document.getElementById('fileInput'));
    var file: any

    this.k = 6

      for(let i = 0; i < this.k; i++){


        fileInput.addEventListener("change", e => {

         /* setTimeout(()=>{
             },500)*/

          if(fileInput.files != null){

            this.k = fileInput.files.length

            try {

              if(fileInput.files[i].size <= 2000000){

                file = fileInput.files;

                }else{

                  this.images = []
                  alert("la imagen debe pesar menos de 2MG")

                }

            } catch (error) {

              this.images = []

            }

          }

          const reader = new FileReader();

            reader.addEventListener("load", () => {

              try {

                  this.images.splice(i,1,reader.result)

              } catch (error) {

                  this.images = []

              }

              });

                try {

                  reader.readAsDataURL(file[i]);

                } catch (error) {

                  this.images = []

                }

          });

      }

      console.log(this.images)

  }

  imagedata2(d:any){

    const index = this.descproduct.indexOf(d);

    var fileInput2 = (<HTMLInputElement>document.getElementById(`fileInput${index}`));
    var file: any

    fileInput2.addEventListener("change", e => {

      if(fileInput2.files != null){

        if(fileInput2.files[0].size <= 2000000){

          const ch1 = fileInput2.files[0].type.charAt(0)
          const ch2 = fileInput2.files[0].type.charAt(1)
          const ch3 = fileInput2.files[0].type.charAt(2)

          const ch4 = ch1 + ch2 + ch3

          if(ch4 === "ima"){

            file = fileInput2.files[0];

          }else{

            alert("solo se permite subir imagenes")

          }


        }else{

          alert("la imagen debe pesar menos de 2MG")

        }

      }

      const reader = new FileReader();

      reader.addEventListener("load", () => {

      //this.images.splice(0,1,reader.result)
      this.descproductData = {texto:reader.result,tipo:this.descproduct[index].tipo,id:this.descproduct[index].id}
      this.descproduct.splice(index, 1,this.descproductData);

      });

      reader.readAsDataURL(file);

    });

  }

  pasardato(){

    this.descproductData = {texto:this.images[0],tipo:"4",id:"999"}

    this.descproduct.splice(0, 1,this.descproductData);

  }

  fakecharge(){

      this.imagedata()

      const btnimg: HTMLInputElement = document.getElementById(`btnimg`) as HTMLInputElement
      const btnimg2: HTMLInputElement = document.getElementById(`btnimg2`) as HTMLInputElement

      btnimg.style.display = "none"
      btnimg2.style.display = ""

  }

  fakechargecustom(d:any){

    const index = this.descproduct.indexOf(d);

    this.imagedata2(d)

    const btnimg: HTMLInputElement = document.getElementById(`btnimg${index}`) as HTMLInputElement
    const btnimg2: HTMLInputElement = document.getElementById(`btnimg2${index}`) as HTMLInputElement

    btnimg.style.display = "none"
    btnimg2.style.display = ""

    this.brakeblucle = true

  }

  indexOfImage(d:any){

    const index = this.images.indexOf(d);

    return index

  }

  changeorderimg(d:any){

    const index = this.images.indexOf(d);
    const temp = this.images[index]



    const indexOfImage: HTMLInputElement = document.getElementById(`inpimg${index}`) as HTMLInputElement

    if(indexOfImage.value >= this.images.length){

      this.images[index] = this.images[this.images.length - 1]
      this.images[this.images.length - 1] = temp

    }else{

      this.images[index] = this.images[indexOfImage.value]
      this.images[indexOfImage.value] = temp

    }




  }

}
