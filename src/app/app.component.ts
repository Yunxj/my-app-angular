import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { My102DataComponent } from './modules/demoComponent/11-19/demo/my102-data/my102-data.component';
// import { My001Component } from './modules/demoComponent/11-19/wang/my001/my001.component';
import { My003Component } from './modules/demoComponent/12-06/my003/my003.component';
import { MockPostInterceptor } from './service/mock-post.interceptor';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // My102DataComponent,
    My003Component,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'HTTP_INTERCEPTORS',
      useClass: MockPostInterceptor,
      multi: true,
    },
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
