import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-introduction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      value={{ value }}
      child.component
    </p>
  `,
  styleUrl: './introduction.component.less',
})
export class ChildAddLifeCycleComponent implements OnInit, OnChanges {
  @Input()
  value!: number;

  constructor() {
    console.log(this.value, 'constructor'); // 初始调用为空，undefined
    // console.log('constructor');
  }
  ngOnInit() {
    console.log(this.value, 'ngOnInit'); // 正常调用
  }
  ngOnChanges(simpleChanges: SimpleChanges): void {
    // 一开始就会执行，后续属性每次发生改变都会触发ngOnChanges执行。
    console.log(simpleChanges, 'ngOnChanges', 'simpleChanges');
    /** simpleChanges = {
     * value: 'SimpleChange',
     * currentValue: 1, 当前的值
     * firstChange: true, 是否是第一次加载
     * previousValue: undefined 前一个值
     * }
     * */
  }
}
