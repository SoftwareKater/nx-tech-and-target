import './app.element.scss';
import { doRouting } from './router';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <h1>Tech and Target</h1>
      <div class="dashboard">
        <div><a class="dashboard__link" href="app-a">Team A</a></div>
        <div><a class="dashboard__link" href="app-b">Team B</a></div>
        <div><a class="dashboard__link" href="app-c">Team C</a></div>
        <div><a class="dashboard__link" href="app-d">Team D</a></div>
      </div>
      <div id="micro-frontend-root">
      </div>
      `;
    doRouting();
  }
}
customElements.define('tech-and-target-root', AppElement);
