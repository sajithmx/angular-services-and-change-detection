import { Component, OnInit } from '@angular/core';
import { Child1Service } from './child1.service';
import { Child2Service } from '../child2/child2.service';

@Component({
  selector: 'app-child1',
  template: './child1.component.html',
  styles: [``],
})
export class Child1Component implements OnInit {
  constructor(
    private child1Service: Child1Service,
    private child2Service: Child2Service
  ) {}

  ngOnInit() {
    console.group('Child1Component');
    this.child1Service.get();
    this.child2Service.get(); // This service is from a different module, since eagerly loaded module we can access all it's services in this component also.
    this.child2Service.set('child2Service Updated');
    console.groupEnd();
    console.log('\n');
  }
}
