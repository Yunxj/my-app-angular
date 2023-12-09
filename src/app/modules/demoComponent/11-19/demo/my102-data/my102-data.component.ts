import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../../service/data.serve';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my102-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my102-data.component.html',
  styleUrl: './my102-data.component.less',
})
export class My102DataComponent implements OnInit {
  name = '欧文';
  age = 29;
  married = true;
  names = ['花花', '东东', '明明', '亮亮'];
  boss = {
    name: '元芳',
    age: 35,
  };
  constructor(private dataService: DataService, public http: HttpClient) {}

  ngOnInit() {
    this.dataService.get().subscribe(res => {
      console.log(res, 'res');
    });
    // let url = '';
    // this.http.get(url).subscribe(res => {
    //   console.log('get');
    // });
  }
  show() {
    return '这是一个方法';
  }
  showClick() {
    alert('点击事件！！！！');
  }
}
