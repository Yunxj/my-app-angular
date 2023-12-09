import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from './gender.pipe';

@Component({
  selector: 'app-my002',
  standalone: true,
  imports: [CommonModule, GenderPipe],
  templateUrl: './my002.component.html',
  styleUrl: './my002.component.less',
})
export class My002Component {
  list = [
    {
      name: '亮亮',
      age: 20,
      sex: 1,
    },
    {
      name: '燕燕',
      age: 18,
      sex: 0,
    },
    {
      name: '东东',
      age: 23,
      sex: 1,
    },
    {
      name: '源源',
      age: 19,
      sex: 0,
    },
  ];

  show() {}
}
