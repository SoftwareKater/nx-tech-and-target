const ROUTES = {
  '/': 'root',
  '/app-a': 'app-a',
  '/app-b': 'app-b',
  '/app-c': 'app-c',
  '/app-d': 'app-d',
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
