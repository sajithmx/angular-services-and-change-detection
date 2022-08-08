import { Component, OnInit } from '@angular/core';
import { Child1Service } from '../child1/child1.service';
import { Child2Service } from './child2.service';

@Component({
  selector: 'app-child2',
  template: './child2.component.html',
  styles: [''],
})
export class Child2Component implements OnInit {
  constructor(
    private child1Service: Child1Service,
    private child2Service: Child2Service
  ) {}

  ngOnInit() {
    console.group('Child2Component');
    this.child1Service.get();
    this.child2Service.get();
    console.groupEnd();
    console.log('\n');
  }
}
