interface ComponentInfo {
  tag: string;
  sources: string[];
}

const ROUTES = {
  '/team-a': {
    tag: 'app-angular-root',
    sources: ['/apps/app-angular/main.js'],
  },
  '/team-b': {
    tag: 'app-react-root',
    sources: ['/apps/app-react/main.js'],
  },
  '/team-c': {
    tag: 'app-lit-root',
    sources: ['/apps/app-lit/main.js'],
  },
  '/team-d': {
    tag: 'app-vue-root',
    sources: ['/apps/app-vue/main.js'],
  },
};

export function loadScripts(path: string): void {
  const componentInfo = ROUTES[path];
  for (const src of componentInfo.sources) {
    const scriptElement = document.createElement('script');
    scriptElement.src = src;
    document.body.appendChild(scriptElement);
  }
}

export function getComponentByPath(path: string): HTMLElement {
  const elementTag = ROUTES[path].tag;
  const componentConstructor = customElements.get(elementTag);
  console.log(`[shell:router] Searching for ${elementTag} in the CustomElementsRegistry... found ${componentConstructor}`);
  const component = document.createElement(elementTag);
  console.log(`[shell:router]`, component)
  return component;
}

export function renderComponent(
  parent: HTMLElement,
  component: HTMLElement
): void {
  console.log(`[shell:router] Appending ${component.nodeName} as a child of ${parent.nodeName + '#' + parent.id}`)
  parent.appendChild(component);
}

export async function doRouting() {
  const path = window.location.pathname;
  if (path == '/') {
    return;
  }
  loadScripts(path);
  setTimeout(() => {
    const webComponent = getComponentByPath(path);
    const parent = document.getElementById('micro-frontend-root');
    renderComponent(parent, webComponent);
  }, 5000);
}
