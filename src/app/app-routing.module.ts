import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentEmulatedComponent} from "./Components/component-emulated/component-emulated.component";
import {ComponentNoneComponent} from "./Components/component-none/component-none.component";
import {ComponentShadowDomComponent} from "./Components/component-shadow-dom/component-shadow-dom.component";
import {WrapperComponent} from "./Components/wrapper/wrapper.component";

const routes: Routes = [
  {
    path: 'emulated',
    component: ComponentEmulatedComponent
  },
  {
    path: 'none',
    component: ComponentNoneComponent
  },
  {
    path: 'shadow',
    component: ComponentShadowDomComponent
  },
  {
    path: 'wrapper',
    component: WrapperComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
