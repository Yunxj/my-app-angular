import { Component, OnInit } from '@angular/core';
import { My002Component } from '../my002/my002.component';
import { My003Component } from '../my003/my003.component';
import { My004Component } from '../my004/my004.component';
import { NamesService } from '../names.service';
// 002 和 003 都在001组件中使用
@Component({
  selector: 'app-my001',
  templateUrl: './my001.component.html',
  styleUrl: './my001.component.less',
})

// 操作数据
export class My001Component implements OnInit {
  my001Name: NamesService;
  nameSIndex: number | undefined;
  constructor(names: NamesService) {
    this.my001Name = names;
  }

  ngOnInit(): void {}

  add() {
    this.my001Name.nameS.push('哈哈');
  }
  deleteData(e: any) {
    this.nameSIndex = e;
    // this.delete();
  }
  delete() {
    if (this.nameSIndex !== undefined) {
      this.my001Name.nameS.splice(this.nameSIndex, 1);
    }
  }
}
