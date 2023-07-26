import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})

export class FilterPeoplePipe implements PipeTransform {

  transform(values: any[],color: any, ...args: unknown[]): any[] {
   return values.filter(v => color.includes(v.color));

   /* return values.filter(v => {

                                for(let i = 0; i < 10; i++)
                                { v.color == color[i] , console.log(i)}

                                });

  */

  }


}
