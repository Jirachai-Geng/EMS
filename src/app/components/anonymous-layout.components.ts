import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anonymous-layout',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ]
})
export class AnonymousLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
