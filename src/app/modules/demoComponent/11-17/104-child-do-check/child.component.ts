import { Component, DoCheck, Input, OnChanges,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-do-check',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      value={{value}}

    </p>
    child.component
  `,
  styleUrl: './child.component.less'
})
export class ChildDoCheckComponent implements DoCheck{
  @Input()
  value!: number;
  ngDoCheck() {
    console.log('%capp-child-do-check ngDoCheck','color:blue')
  }
}
