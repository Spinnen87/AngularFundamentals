import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {
  transform(value: number | null | undefined, ...args: unknown[]): string {
    if (value){
      const duration = +value;
      const h = Math.floor(duration / 60);
      const m = duration - (60 * h);
      return `${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}`;
    }
    return '00:00';
  }

}
