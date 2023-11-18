import { Component, Input, OnChanges,ContentChild,ViewChild,SimpleChanges ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildDoCheckComponent } from '../104-child-do-check/child.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-parent-do-check',
  standalone: true,
  imports: [CommonModule,ChildDoCheckComponent,FormsModule],
  template: `
    <input [(ngModel)]="value" type="text">
    <app-child-do-check [value]="value"></app-child-do-check>
  `,
  styleUrl: './parent.component.less'
})
export class ParentDoCheckComponent implements DoCheck{
  value = 1
  ngDoCheck() {
    console.log('%capp-parent-do-check ngDoCheck','color:red')
  }

}
