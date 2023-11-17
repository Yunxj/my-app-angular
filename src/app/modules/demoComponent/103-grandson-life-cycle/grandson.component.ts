import { Component, OnChanges,OnInit,DoCheck,OnDestroy,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grandson-life-cycle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grandson-life-cycle">
      <span class="grandson-life-cycle-text">grandson-life-cycle</span>
    </div>
  `,
  styleUrl: './grandson.component.less'
})
export class GrandsonLifeCycleComponent implements OnInit ,OnChanges,DoCheck,OnDestroy,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{
  ngOnInit(): void {
    console.log('%capp-grandson-life-cycle ngOnInit','color: green')
  }
  ngOnChanges():void {
    console.log('%capp-grandson-life-cycle ngOnChanges','color: green')
  }
  ngDoCheck() {
    console.log('%capp-grandson-life-cycle ngDoCheck','color: green')
  }

  ngAfterContentChecked() {
    console.log('%capp-grandson-life-cycle ngAfterContentChecked','color: green')
  }

  ngAfterContentInit() {
    console.log('%capp-grandson-life-cycle ngAfterContentInit','color: green')
  }

  ngAfterViewChecked() {
    console.log('%capp-grandson-life-cycle ngAfterViewChecked','color: green')
  }

  ngAfterViewInit() {
    console.log('%capp-grandson-life-cycle ngAfterViewInit','color: green')
  }

  ngOnDestroy(){
    console.log('%capp-grandson-life-cycle ngOnDestroy','color: green')
  }
}
