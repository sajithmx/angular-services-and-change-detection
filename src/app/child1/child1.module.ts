import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1.component';
import { Child1Service } from './child1.service';

@NgModule({
  imports: [CommonModule],
  declarations: [Child1Component],
  providers: [Child1Service],
  exports: [Child1Component],
})
export class Child1Module {}
