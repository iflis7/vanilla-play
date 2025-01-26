type RouteHandler = () => Promise<{ el: HTMLElement }>;

export class Router {
  private routes: Record<string, RouteHandler>;
  private rootElement: HTMLElement | null;
  private currentView: HTMLElement | null = null;

  constructor(routes: Record<string, RouteHandler>, rootElementId: string) {
    this.routes = routes;
    this.rootElement = document.getElementById(rootElementId);
  }

  public navigateTo(url: string): void {
    history.pushState(null, '', url);
    this.handleRouting();
  }

  private async handleRouting(): Promise<void> {
    const path = window.location.pathname;
    const routeHandler = this.routes[path] || this.routes['/404'];

    if (!routeHandler || !this.rootElement) {
      console.error('Root element or route handler not found.');
      return;
    }

    if (this.currentView) {
      this.currentView.remove();
    }

    const { el } = await routeHandler();
    this.currentView = el;
    this.rootElement.appendChild(el);
  }

  public init(): void {
    document.body.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('[data-link]');
      if (target instanceof HTMLAnchorElement) {
        e.preventDefault();
        this.navigateTo(target.href);
      }
    });

    window.addEventListener('popstate', () => this.handleRouting());
    this.handleRouting();
  }
}
