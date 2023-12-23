import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { My004Component } from './my004.component';
@NgModule({
  declarations: [My004Component],
  imports: [CommonModule, FormsModule], // 将 FormsModule 添加到 imports 数组中
  exports: [My004Component],
  // providers: [],
  bootstrap: [My004Component],
})
export class My004Module {}
