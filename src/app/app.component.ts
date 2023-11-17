import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ParentAddLifeCycleComponent } from './modules/demoComponent/101-parent-add-life-cycle/parent.component';
import { ParentContentViewComponent } from './modules/demoComponent/102-parent-content-view/parent.component';
import { ParentLifeCycleComponent } from './modules/demoComponent/103-parent-life-cycle/parent.component';
import { ParentDoCheckComponent } from './modules/demoComponent/104-parent-do-check/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,ParentAddLifeCycleComponent,ParentContentViewComponent,ParentLifeCycleComponent,ParentDoCheckComponent],
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  /**
   * 案例1:初识生命周期
   *  <app-parent-add-life-cycle></app-parent-add-life-cycle>
   * 案例2:content ==> <ng-content>,view ==> <app-child> 使用组件的实例，解释content和view钩子
   *  <app-parent-content-view class="app-root"></app-parent-content-view>
   * 案例3:嵌套圆解释生命周期的执行顺序
   *  <app-parent-life-cycle class="app-root"></app-parent-life-cycle>
   * 案例4:频繁触发的DoCheck
   *  <app-parent-do-check class="app-root-check"></app-parent-do-check>
   */
  template:`
   <!-- <app-home></app-home> -->
   <!-- 案例1:初识生命周期 -->
   <app-parent-add-life-cycle></app-parent-add-life-cycle>
   <!-- 案例2:解释content和view钩子 -->
   <!-- <app-parent-content-view class="app-root"></app-parent-content-view> -->
   <!-- 案例3:嵌套圆解释生命周期的执行顺序 -->
   <!-- <app-parent-life-cycle class="app-root"></app-parent-life-cycle> -->
   <!-- 案例4:频繁触发的DoCheck -->
   <!-- <app-parent-do-check class="app-root-check"></app-parent-do-check> -->
  `
})
  export class AppComponent {
  // value = 1;
  title = 'my-app-angular';
  constructor() {
    // console.log(this.value);// undefined
    console.log('constructor');
  }

  /** 总结：
   * 1、8个生命周期钩子，前面加ng就是钩子的方法
   * 案例1:
   * 1、运行代码时，一开始会执行很多函数，其中checked结尾的函数打印多次，init结尾的函数只打印一次
   *    只执行一次的，ngOnInit,ngAfterContentInit,ngAfterViewInit,ngOnDestroy
   *    多次执行的钩子，ngOnChanges,ngDoCheck,ngAfterContentChecked,ngAfterViewChecked
   * 2、点击按钮，有数据变更，有3个触发ngDoCheck,ngAfterContentChecked,ngAfterViewChecked，
   *    ngOnChanges,只有修改属性发生变化，才会触发
   * 3、严格来说，构造函数constructor，不属于angular的生命周期，但的确再组件初始化的时候调用。
   *    那么OnInit有什么区别呢，构造函数执行时，输入属性尚未被赋值，如果在构造函数使用输入属性，拿到的值时undefined.
   *    对于初始化要执行的业务，应该放在OnInit当中。
   * 案例2:
   * 1、content和view的生命钩子区别，
   *    content ==> <ng-content>
   *        调用形式：使用的插槽
   *        <app-parent>
   *          <app-child [value]="value"></app-child> （<ng-content>）
   *        </app-parent>
   *        获取实例： @ContentChild(ChildComponent) contentChild: ChildComponent | undefined;
   *    view ==> <app-child> 使用组件的实例，
   *        调用形式：正常使用
   *          <app-child #viewChild></app-child>
   *        获取实例：@ViewChild('viewChild') viewChild:ChildComponent| undefined;需要选择器，（ #viewChild）
   * 案例3:
   * 1、content和view的执行顺序
   * 2、content钩子是父组件先执行,view钩子是子组件先执行
   * 案例4:
   * 1、ngDoCheck钩子调用的频率最高不要在当中实现过重的业务
   * 结论：
   * 1. checked结尾的钩子会执行多次其余的都只执行一次.
   * 2. ngOnChanges只在输入属性变更时触发且可以有一个参数，包含变更属性的信息
   * 3. content钩子是父组件先执行,view钩子是子组件先执行
   * 4. ngDoCheck钩子调用的频率最高不要在当中实现过重的业务
   * 5. 初始化的业务应该放在ngOnInit中而不是构造函数中
   */


}
