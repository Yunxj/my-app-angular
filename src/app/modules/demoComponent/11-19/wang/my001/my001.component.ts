import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my001',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my001.component.html',
  styleUrl: './my001.component.less',
})
// ng generate component my001 ng g c my001
export class My001Component {
  name = '花花';
  age = 18;
  school = true;
  // 数组
  names = ['花花', '亮亮', '明明'];
  namesO = [{ name: '花花', data: [] }, '亮亮', '明明'];
  // 对象
  boss: any = {
    name: '元芳',
    age: 35,
  };
  size = 30;
  htmlValue = '<h2>我是html</h2>';

  showName() {
    return '元芳 ------ ';
  }

  showClick() {
    alert('我被点击了');
  }
}
