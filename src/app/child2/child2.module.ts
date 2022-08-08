import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2.component';
import { Child2Service } from './child2.service';

@NgModule({
  imports: [CommonModule],
  declarations: [Child2Component],
  providers: [Child2Service],
  exports: [Child2Component],
})
export class Child2Module {}
