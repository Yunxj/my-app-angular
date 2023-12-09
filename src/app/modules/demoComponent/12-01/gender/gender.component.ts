import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from '../gender.pipe';
import { UppercasePipe } from '../uppercase.pipe';
import { MockPostInterceptor } from '../../../../service/mock-post.interceptor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [CommonModule, GenderPipe, UppercasePipe],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.less',
})
export class GenderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  today = new Date();
  score = 60;
  userList = [
    { name: '亮亮', age: 29, sex: 1 },
    { name: '燕燕', age: 19, sex: 0 },
    { name: '东东', age: 20, sex: 1 },
    { name: '源源', age: 18, sex: 0 },
  ];

  ngOnInit(): void {
    console.log('ngOnInit executed');
  }
}
