import { Injectable } from '@angular/core';


@Injectable()
export class Child1Service {
  private serviceName = 'Child1Service';

  constructor() {}

  set(name) {
    this.serviceName = name;
  }

  get() {
    console.log('Child1Service:', this.serviceName);
    return this.serviceName;
  }
}
