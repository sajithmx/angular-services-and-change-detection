import { Injectable } from '@angular/core';

@Injectable()
export class Child2Service {
  private serviceName = 'Child2Service';

  constructor() {}

  set(name) {
    this.serviceName = name;
  }

  get() {
    console.log('Child2Service:', this.serviceName);
    return this.serviceName;
  }
}
