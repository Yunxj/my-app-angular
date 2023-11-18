import { Component, Input, OnChanges,ContentChild,ViewChild,SimpleChanges ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, DoCheck, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAddLifeCycleComponent } from '../101-child-add-life-cycle/child.component';

@Component({
  selector: 'app-parent-add-life-cycle',
  standalone: true,
  imports: [CommonModule,ChildAddLifeCycleComponent],
  template: `
    <app-child-add-life-cycle [value]="value"></app-child-add-life-cycle>
    <button type="button" (click)="clickHandler()" >add</button>
  `,
  styleUrl: './parent.component.less'
})
export class ParentAddLifeCycleComponent implements OnInit, OnChanges,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck,OnDestroy{
  value = 1;
  constructor() {
    console.log(this.value,'constructor');// undefined
    console.log('constructor');
  }
 /** 多次触发的生命周期案例 */
    clickHandler() {
    this.value++;
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnChanges() {
    // 属性每次发生改变都会触发ngOnChanges执行。子组件数据发生改变会执行
    console.log('ngOnChanges','simpleChanges')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
