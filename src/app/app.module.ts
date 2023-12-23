import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MockPostInterceptor } from './service/mock-post.interceptor';
// import { My001Component } from './modules/demoComponent/12-14/my001/my001.component';
import { My001Module } from './modules/demoComponent/12-14/my001/my001.module';
import { My002Component } from './modules/demoComponent/12-14/my002/my002.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    My001Module,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    // My002Component,
    // FormsModule,
  ], // 将 FormsModule 添加到 imports 数组中
  providers: [
    {
      provide: 'HTTP_INTERCEPTORS',
      useClass: MockPostInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
