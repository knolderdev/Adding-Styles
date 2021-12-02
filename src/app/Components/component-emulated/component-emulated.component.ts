import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-component-emulated',
  templateUrl: './component-emulated.component.html',
  styleUrls: ['./component-emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
