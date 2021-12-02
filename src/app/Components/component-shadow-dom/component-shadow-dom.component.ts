import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-component-shadow-dom',
  templateUrl: './component-shadow-dom.component.html',
  styles: [
    `
      p.green-shadow{
        border: 2px solid green;
      }
      //p.red-emulated{
      //  border: 2px solid aqua;
      //}
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
