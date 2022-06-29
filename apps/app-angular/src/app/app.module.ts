import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    console.log('bootstrapping angular app')
    const angularWebComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-a', angularWebComponent);
    customElements.whenDefined('app-a').then((res) => console.log(res))
    setTimeout(() => {
      console.log('not defined...')
    }, 5000);
  }
}
