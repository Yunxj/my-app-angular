import { Component, Input, OnChanges,ContentChild,ViewChild,SimpleChanges ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildContentViewComponent } from '../102-child-content-view/child.component';

@Component({
  selector: 'app-parent-content-view',
  standalone: true,
  imports: [CommonModule,ChildContentViewComponent],
  template: `
    <ng-content></ng-content>
    <!-- <app-child #viewChild  [value]="value"></app-child> -->
    <!-- <button type="button" (click)="clickHandler()" >add</button> -->
  `,
  styleUrl: './parent.component.less'
})
export class ParentContentViewComponent implements AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked{
  // @Input() value!: number;
  // value = 1;
  @ContentChild(ChildContentViewComponent) contentChild: ChildContentViewComponent | undefined;
  @ViewChild('viewChild') viewChild:ChildContentViewComponent| undefined

  //   clickHandler() {
  //   this.value++;
  // }
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

  ngAfterContentInit() {
    console.log('ngAfterContentInit',this.contentChild)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked',this.contentChild)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit',this.viewChild)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked',this.viewChild)
  }
}
