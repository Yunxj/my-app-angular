import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NamesService } from '../names.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my002',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my002.component.html',
  styleUrl: './my002.component.less',
})
export class My002Component implements OnInit {
  @Output() my001Event = new EventEmitter();
  nameSS: NamesService;
  constructor(nameS: NamesService) {
    this.nameSS = nameS;
  }

  ngOnInit(): void {
    console.log(this.nameSS.nameS);
  }

  my02Delete() {}
}
