import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDatePipe'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value)
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    return `${dd < 10 ? `0${dd}` : dd}.${mm < 10 ? `0${mm}` : mm}.${yyyy}`;
  }
}
