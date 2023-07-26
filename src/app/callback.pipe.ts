import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback'
})
/*export class CallbackPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}*/

export class CallbackPipe implements PipeTransform {
  transform(items: any[],arg1: any, callback: (item: any) => boolean): any {
      if (!items || !callback && items==arg1) {
          return items;
      }
      return items.filter(item => callback(item));
  }
}
