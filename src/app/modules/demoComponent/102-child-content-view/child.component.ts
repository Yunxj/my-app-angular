import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-content-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      value={{value}}
      child.component
    </p>
  `,
  styleUrl: './child.component.less'
})
export class ChildContentViewComponent implements OnChanges{
  @Input()
  value!: number;
  ngOnChanges(simpleChanges:SimpleChanges):void {
    // 一开始就会执行，后续属性每次发生改变都会触发ngOnChanges执行。
    console.log(simpleChanges,'ngOnChanges','simpleChanges')
    /** simpleChanges = {
     * value: 'SimpleChange',
     * currentValue: 1, 当前的值
     * firstChange: true, 是否是第一次加载
     * previousValue: undefined 前一个值
     * }
     * */
  }
}
