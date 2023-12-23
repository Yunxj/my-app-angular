import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-my003',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my003.component.html',
  styleUrl: './my003.component.less',
})
export class My003Component implements OnInit {
  my003Name: NamesService;
  constructor(nameS: NamesService) {
    this.my003Name = nameS;
  }

  ngOnInit(): void {}
}
