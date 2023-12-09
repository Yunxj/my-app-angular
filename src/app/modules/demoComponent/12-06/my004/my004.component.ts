import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my004-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my004.component.html',
  styleUrl: './my004.component.less',
})
export class My004Component {
  @Input() name: string | undefined;
  @Input() age: number | undefined;
  @Output() msgEvent = new EventEmitter();

  cName: any = 'child';
  my004 = 'child';
  data = {
    cName: 'cName',
    my004: 'my004',
  };
}
