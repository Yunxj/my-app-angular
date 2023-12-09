// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  data: object[] = [
    {
      name: '花花',
      age: 18,
    },
  ];
  get(): Observable<Object> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.data);
        observer.complete();
      }, 2000); // 模拟 2 秒的请求延迟
    });
  }
}
