import { Component, OnInit, DoCheck,OnChanges,OnDestroy, AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandsonLifeCycleComponent } from '../103-grandson-life-cycle/grandson.component'

@Component({
  selector: 'app-child-life-cycle',
  standalone: true,
  imports: [CommonModule,GrandsonLifeCycleComponent],
  template: `
    <div class="child-life-cycle">
      <span class="child-life-cycle-text"> child-life-cycle</span>
      <app-grandson-life-cycle></app-grandson-life-cycle>
    </div>
  `,
  styleUrl: './child.component.less'
})
export class ChildLifeCycleComponent implements OnInit, DoCheck,OnChanges,OnDestroy, AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked{
  ngOnInit(): void {
        console.log('%capp-child-life-cycle ngOnInit','color: blue')
  }
  ngOnChanges():void {
    console.log('%capp-child-life-cycle ngOnChanges','color: blue')
  }

  ngDoCheck() {
    console.log('%capp-child-life-cycle ngDoCheck','color: blue')

  }
  ngAfterContentInit() {
    console.log('%capp-child-life-cycle ngAfterContentInit','color: blue')

  }
  ngAfterContentChecked() {
    console.log('%capp-child-life-cycle ngAfterContentChecked','color: blue')

  }
  ngAfterViewInit() {
    console.log('%capp-child-life-cycle ngAfterViewInit','color: blue')

  }
  ngAfterViewChecked( ) {
    console.log('%capp-child-life-cycle ngAfterViewChecked','color: blue')

  }
  ngOnDestroy() {
    console.log('%capp-child-life-cycle ngOnDestroy','color: blue')

  }
}
