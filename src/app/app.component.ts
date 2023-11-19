import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ParentAddLifeCycleComponent } from './modules/demoComponent/11-17/101-parent-add-life-cycle/parent.component';
import { ParentContentViewComponent } from './modules/demoComponent/11-17/102-parent-content-view/parent.component';
import { ParentLifeCycleComponent } from './modules/demoComponent/11-17/103-parent-life-cycle/parent.component';
import { ParentDoCheckComponent } from './modules/demoComponent/11-17/104-parent-do-check/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    ParentAddLifeCycleComponent,
    ParentContentViewComponent,
    ParentLifeCycleComponent,
    ParentDoCheckComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  // value = 1;
  title = 'my-app-angular';
  constructor() {
    // console.log(this.value);// undefined
    console.log('constructor');
  }
}
