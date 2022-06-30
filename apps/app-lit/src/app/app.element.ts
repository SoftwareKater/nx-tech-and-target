import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-lit-root')
export class AppLitRoot extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  name = 'Team C';

  render() {
    return html`<div><h2>Hello, ${this.name}!</h2><p>Here goes your app!</p></div>`;
  }
}
