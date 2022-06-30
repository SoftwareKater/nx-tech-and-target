import './app.element.scss';
import { doRouting } from './router';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <h1>Tech and Target</h1>
      <div class="dashboard">
        <div><a class="dashboard__link" href="team-a">Team A</a></div>
        <div><a class="dashboard__link" href="team-b">Team B</a></div>
        <div><a class="dashboard__link" href="team-c">Team C</a></div>
        <div><a class="dashboard__link" href="team-d">Team D</a></div>
      </div>
      <div id="micro-frontend-root">
      </div>
      `;
    doRouting();
  }
}
customElements.define('tech-and-target-root', AppElement);
