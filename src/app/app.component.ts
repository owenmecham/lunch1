import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lunch1';
  internalCount: number;

  @Input() set counter(value: number) {
    this.internalCount = value;
  }
  constructor() {
    console.log(`constructed value = ${this.internalCount}`);
  }
  ngOnInit(): void {
    console.log(`init value = ${this.internalCount}`);
  }
  increment(): void {
    this.internalCount++;
  }
}
