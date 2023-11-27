import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from '../focus/focus.directive';
import { UpperDirective } from '../upper.directive';

@Component({
  selector: 'app-my001',
  standalone: true,
  imports: [CommonModule, FocusDirective, UpperDirective],
  templateUrl: './my001.component.html',
  styleUrl: './my001.component.less',
})
export class My001Component {
  score = 70;
  type = 1;
  data = {
    info: {
      name: 'xxx',
      type: 1, //
      typeName: '会员',
    },
    order: [{ goods: 'JD' }, { goods: 'PDD' }],
  };
  names = [{ goods: 'JD' }, { goods: 'PDD' }, { goods: 'TB' }];

  show() {
    if (true) return '';
    // switch (true) {
    //   case 1:
    //     return '';
    // }
  }
}
