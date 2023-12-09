import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  transform(value: number, lang = 'zh'): string {
    if (lang === 'zh') {
      if (value == 0) return '女';
      if (value == 1) return '男';
    }
    if (lang === 'en') {
      if (value === 0) return 'Female';
      if (value === 1) return 'Male';
    }
    return ' - ';
  }
}
