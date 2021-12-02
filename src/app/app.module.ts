import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentEmulatedComponent } from './Components/component-emulated/component-emulated.component';
import { ComponentNoneComponent } from './Components/component-none/component-none.component';
import { ComponentShadowDomComponent } from './Components/component-shadow-dom/component-shadow-dom.component';
import { WrapperComponent } from './Components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentEmulatedComponent,
    ComponentNoneComponent,
    ComponentShadowDomComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
