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
    sources: ['/apps/app-lit/main.b728cf831d45f4a6.esm.js'],
  },
  '/team-d': {
    tag: 'app-vue-root',
    sources: ['/apps/app-vue/main.js'],
  },
};

export function loadScripts(sources: string[]): void {
  for (const src of sources) {
    const scriptElement = document.createElement('script');
    scriptElement.src = src;
    document.body.appendChild(scriptElement);
  }
}

export async function getComponentByTag(elementTag: string): Promise<HTMLElement | undefined> {
  try {
    await customElements.whenDefined(elementTag);
  } catch(e) {
    console.error(e)
  } finally {
    console.log(`[shell:router] Custom Element ${elementTag} is available on Custom Element Registry`)
  }
  const componentConstructor = customElements.get(elementTag);
  if (!componentConstructor) {
    console.error('[shell:router] Custom Element does not exist.');
    return undefined
  }
  const component = document.createElement(elementTag);
  console.log(`[shell:router] Created DOM node from custom element`, component);
  return component;
}

export async function doRouting() {
  const path = window.location.pathname;
  if (path == '/') {
    return;
  }
  loadScripts(ROUTES[path].sources);
  const webComponent = await getComponentByTag(ROUTES[path].tag);
  const parent = document.getElementById('micro-frontend-root');
  parent.appendChild(webComponent);
}
