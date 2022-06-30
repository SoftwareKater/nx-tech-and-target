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
    customElements.whenDefined('app-angular-root').then(() => console.log(`[app:angular] Successfully created web component`))
    console.log('[app:angular] bootstrapping angular app')
    const angularWebComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-angular-root', angularWebComponent);
  }
}
