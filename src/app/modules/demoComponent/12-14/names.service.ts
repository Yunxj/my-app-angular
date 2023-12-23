import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NamesService {
  nameS = ['亮亮', '东东', '圆圆', '花花'];
  framework = ['vue', 'react', 'angular'];

  constructor() {}
}
