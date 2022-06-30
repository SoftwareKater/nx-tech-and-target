import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    const webComponentName = 'app-angular-root' // do NOT change this
    customElements.whenDefined(webComponentName).then(() => console.log(`[app:angular] Successfully created web component ${webComponentName}`))
    const angularWebComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define(webComponentName, angularWebComponent);
  }
}
