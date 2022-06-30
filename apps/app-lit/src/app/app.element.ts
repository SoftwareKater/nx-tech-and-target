import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-lit-root')  // do NOT change this
export class AppLitRoot extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  tech = 'lit';

  render() {
    return html`<div>
      <h2>Tech and Target - Team ?</h2>
      <p>If you picked ${this.tech}, this is your app!</p>
    </div>`;
  }
}

// register web component without using proposal-class-decorators
// const webComponentName = 'app-lit-root'; // do NOT change this
// customElements
//   .whenDefined(webComponentName)
//   .then(() =>
//     console.log(
//       `[app:lit] Successfully created web component ${webComponentName}`
//     )
//   );
// customElements.define(webComponentName, AppLitRoot);
