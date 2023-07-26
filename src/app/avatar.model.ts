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
  text: string;
  caract: any[];
  color: string;
  url: string;
  extraurl:any[];
}

export interface Buyman{

 nombre: string;
 reputacion: number;
 ubicacion: string;
 contacto: number;
 color: string;

}

export interface ProductBuy{

  titulodescripcion: any [];
  descripcion: any [];
  nombreopiniones: any [];
  opiniones: any [];
  descripciontext: string;
  color: string;

 }

 export interface PruebaObject{

  Titulo: any [];
  Radius: any [];
  Text: any [];
  Image: any [];

 }

 export interface MemoriGame{

  English: string;
  Español: string;


 }


