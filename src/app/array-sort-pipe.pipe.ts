import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any, field: string, orden:string): any[] {
    if (!Array.isArray(array)) {
      //return;
    }

    if(orden == 'asce'){
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
        });
    }
    else if(orden == 'desc'){
      array.sort((a: any, b: any) => {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    /*else if(orden == 'acse'){
      array.sort((a: any, b: any) => {
        return a[field]-b[field];
      });
    }
    else if(orden == 'desc'){
      array.sort((a: any, b: any) => {
        return b[field]-a[field];
      });

    }*/
    return array;
  }
}
