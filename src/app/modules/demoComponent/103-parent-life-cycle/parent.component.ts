import { Component,OnInit,DoCheck,OnChanges, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildLifeCycleComponent } from '../103-child-life-cycle/child.component';

@Component({
  selector: 'app-parent-life-cycle',
  standalone: true,
  imports: [CommonModule,ChildLifeCycleComponent],
  template: `
    <div  class="parent-circle">
      <span class="parent-circle-text">
        parent-life-cycle
      </span>
      <app-child-life-cycle ></app-child-life-cycle>
    </div>
  `,
  styleUrl: './parent.component.less'
})
export class ParentLifeCycleComponent implements OnInit, DoCheck,OnChanges,AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy{

  /**
   * 1、添加全生命周期，父（红-red）、子（蓝-blue）、孙（绿-green）
   * 2、结论：
   *    content的生命周期 父组件优先执行，再调用子组件content的钩子
   *    view的生命周期，全部子组件view执行完毕，再调用父组件的view钩子
   * 3、DOCheck钩子要特别留意
   *    调用很频繁，避免复杂业务在此调用
   * todo 写一个嵌套圆，给个例子
   */
  ngOnInit() {
    console.log('%capp-parent-life-cycle ngOnInit','color: red;')
  }

  ngDoCheck() {
    console.log('%capp-parent-life-cycle ngDOCheck','color: red;')
  }

  ngOnChanges() {
    console.log('%capp-parent-life-cycle ngOnChanges','color: red;')
  }

  ngAfterContentInit() {
    console.log('%capp-parent-life-cycle ngAfterContentInit','color: red;')
  }

  ngAfterContentChecked() {
    console.log('%capp-parent-life-cycle ngAfterContentChecked','color: red;')
  }

  ngAfterViewInit() {
    console.log('%capp-parent-life-cycle ngAfterViewInit','color: red;')
  }

  ngAfterViewChecked() {
    console.log('%capp-parent-life-cycle ngAfterViewChecked','color: red;')
  }

  ngOnDestroy(){
    console.log('%capp-parent-life-cycle ngOnDestroy','color: red;')
  }
}
