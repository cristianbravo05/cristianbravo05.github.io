import { Component, OnInit  } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAvatar } from 'src/app/avatar.model';
import { AvatarService } from 'src/app/services/avatar.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, RouterModule, NgIf, CommonModule],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  avatars: any = [];
  avatars2: any = [];
  arrayavatar: any = [];
  listProductos: GetAvatar[] = [];
  avatarData!: any;
  id!: number;
  data!: any;
  Image1AvatarForm!: FormGroup;

  constructor(
    private service: AvatarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private actRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.displayAvatar2('648b7c3c35c4c424edf0c3fa');
    this.displayAvatar2('648b7b3a35c4c424edf0c3e4');
    this.displayAvatar2('648b7b2935c4c424edf0c3e1');

  }

  displayAvatar2(idimage: string) {
    this.service.getAvatarById2(idimage).subscribe({
      next: (res: GetAvatar) => {
        console.log(res);
        //this.avatars2 = Object.entries(res);
        this.avatars2 = res;
        //console.log(typeof this.avatars2);
        this.arrayavatar.push(this.avatars2)
        console.log(this.arrayavatar);
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  modalData(avatar: any) {
    console.log(avatar);
    this.avatarData = avatar;
  }

  onSubmit(idtem : number) {
    this.http
      .delete(`${environment.RealURL}/delete/${idtem}`)
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

}

