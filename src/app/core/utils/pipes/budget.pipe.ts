import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'budget'})
export class BudgetPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) return 'N/A'
    if (value.includes('-')) {
      const [min, max] = value.split('-');
      return `$${parseFloat(min).toFixed(0)} - ${parseFloat(max).toFixed(0)} million`;
    } else {
      return `$${parseFloat(value).toFixed(0)} million`;
    }
  }
}