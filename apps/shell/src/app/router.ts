const ROUTES = {
  '/': 'root',
  '/team-a': 'app-angular-root',
  '/team-b': 'app-react-root',
  '/team-c': 'app-lit-root',
  '/team-d': 'app-vue-root',
};

export function getComponentByPath(path: string): HTMLElement {
  const elementName = ROUTES[path];
  const component = document.createElement(elementName);
  return component;
}

export function renderComponent(
  parent: HTMLElement,
  component: HTMLElement
): void {
  console.log(`Appending ${component} as a child of ${parent}`)
  parent.appendChild(component);
}

export function doRouting() {
  const path = window.location.pathname;
  console.log(path);
  const webComponent = getComponentByPath(path);
  console.log(webComponent);
  const parent = document.getElementById('micro-frontend-root');
  renderComponent(parent, webComponent);
  console.log(parent);
}
