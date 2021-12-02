import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-component-none',
  templateUrl: './component-none.component.html',
  styleUrls: ['./component-none.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
