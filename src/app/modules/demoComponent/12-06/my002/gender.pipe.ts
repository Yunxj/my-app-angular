import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  transform(value: unknown, args: string = 'zh'): string {
    if (args === 'en') {
      if (value === 0) return 'female';
      if (value === 1) return 'male ';
    }
    if (args === 'zh') {
      if (value === 0) return '女';
      if (value === 1) return '男';
    }
    return '-';
  }
}
