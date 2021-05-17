import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCut'
})
export class NameCutPipe implements PipeTransform {

  transform(name: string): string {
    if (name.length > 30) {
      return name.substring(0, 30) + '...';
    }
    return name;
  }

}
