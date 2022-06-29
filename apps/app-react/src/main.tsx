import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

class ReactWebComponent extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

customElements.define('app-b', ReactWebComponent);
