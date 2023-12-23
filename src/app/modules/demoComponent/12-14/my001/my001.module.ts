import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { My001Component } from '../my001/my001.component';
import { My002Component } from '../my002/my002.component';
import { My003Component } from '../my003/my003.component';
import { My004Component } from '../my004/my004.component';
import { My004Module } from '../my004/my004.module';
// import { My004Module } from '../my004/my004.module';
@NgModule({
  declarations: [My001Component],
  imports: [CommonModule, My002Component, My003Component, My004Module], // 将 FormsModule 添加到 imports 数组中
  exports: [My001Component],
  providers: [],
})
export class My001Module {}
