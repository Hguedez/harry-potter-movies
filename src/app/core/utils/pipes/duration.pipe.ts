import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    const duration:number = Number(value);
    const hours:number = Math.floor(duration / 60);
    const minutes:number = duration % 60;
    return `${hours}h ${minutes}min`;
  }
}