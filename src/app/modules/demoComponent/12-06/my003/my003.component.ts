import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { My004Component } from '../my004/my004.component';

@Component({
  selector: 'app-my003-f',
  standalone: true,
  imports: [CommonModule, My004Component],
  templateUrl: './my003.component.html',
  styleUrl: './my003.component.less',
})
export class My003Component {
  @ViewChild('my004') my004: My003Component | any;
  age = 20;
  fname = 'fName';

  change() {
    this.age = 30;

    this.my004['cName'] = 'f-child';
    this.my004['my004'] = 'f-child';

    console.log(this.my004, 'this.my004');
  }
  show(data: any) {
    this.fname = data.cName;
    console.log(data, 'eeee1111');
    if (data?.type === 'a') {
      this.show1(data.cName);
    }
    if (data?.type === 'b') {
      this.show2(data.cName);
    }
  }
  show1(data: any) {
    this.fname = data.cName;
    console.log(data, 'eeee1111');
  }
  show2(data: any) {
    this.fname = data.cName;
    console.log(data, 'eeee1111');
  }
}
