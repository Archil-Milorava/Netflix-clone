import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desctiption',
  standalone: true
})
export class DesctiptionPipe implements PipeTransform {

  transform(value: string, args: number): any {
    return `${value.substring(0,args)}...`
  }

}
