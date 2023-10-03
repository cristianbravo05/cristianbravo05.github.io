export interface GetAvatar {
  _id: string;
  name: string;
  avatar: string;
  cloudinary_id: string;
  createdAt: string;
  updatedAt: string;
}


export interface CreateAvatar {
  name: string;
  avatar: string;
  cloudinary_id: string;
}

export interface ImageFilter {
  tag: any[];
  price: number;
  text: any[];
  text2: any[];
  caract: any[];
  color: string;
  url: string;
  extraurl:any[];

}

export interface Buyman{

 nombre: string;
 reputacion: number;
 ubicacion: string;
 stock: number;
 color: string;

}

export interface ProductBuy{

  titulodescripcion: any [];
  descripcion: any [];
  nombreopiniones: any [];
  opiniones: any [];
  opcoment: any[];
  oprate: any[];
  descripciontext: string;
  color: string;
  ubicacion: string;
  rate:number;

 }

 export interface PruebaObject{

  Titulo: any [];
  Radius: any [];
  Text: any [];
  Image: any [];

 }

 export interface MemoriGame{

  English?: string;
  Espanol?: string;


 }

 export interface MemoriGameVerb{

  verbo?: string;
  pasado?: string;
  participio?: string;
  espanol?: string;


 }

 export interface DescProduct{

  texto?: any;
  tipo?: string;
  id?: number;

 }

 export class Person {
  id: number;
  name: String;
  surname: String;
  age: number;
}

export class Seller {
  Nombres: String;
  Apellidos: String;
  Empresa: String;
  Departamento: String;
  Ciudad: String;
  Dirrecion: String;
  Telefono: String;
  Telefono2: String;
  Telefono3: String;

  constructor( Nombres: String,
    Apellidos: String,
    Empresa: String,
    Departamento: String,
    Ciudad: String,
    Dirrecion: String,
    Telefono: String,
    Telefono2: String,
    Telefono3: String)
    {

    this.Nombres= Nombres;
    this.Apellidos= Apellidos;
    this.Empresa= Empresa;
    this.Departamento= Departamento;
    this.Ciudad= Ciudad;
    this.Dirrecion= Dirrecion;
    this.Telefono= Telefono;
    this.Telefono2= Telefono2;
    this.Telefono3= Telefono3;

}

}

export const PERSONS: Person[] = [
  {
      id: 1,
      name: 'Thomas',
      surname: 'Novicky',
      age: 21
  },
  {
      id: 2,
      name: 'Adam',
      surname: 'Tracz',
      age: 12
  },
  {
      id: 3,
      name: 'Steve',
      surname: 'Laski',
      age: 38
  }
];


