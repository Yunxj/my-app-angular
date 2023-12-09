import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my001',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my001.component.html',
  styleUrl: './my001.component.less',
})
export class My001Component {
  todayDate = new Date();
}
