import './style.css'
import { Router } from './Router';
import { Nutshell } from './components/Nutshell';
import { DomApi } from './components/DomApi';
import { WebApi } from './components/WebApi';
import { Widgets } from './components/Widgets';

document.addEventListener('DOMContentLoaded', () => {
  const routes = {
    '/': Nutshell,
    '/dom-api': DomApi,
    '/web-api': WebApi,
    '/widgets': Widgets,
    '/404': async (): Promise<{ el: HTMLElement }> => {
      const el = document.createElement('div');
      el.innerHTML = `<h1 class="text-center text-3xl font-bold py-8" >404 - Page Not Found</h1>`;
      return { el };
    },
  };

  const router = new Router(routes, 'app');
  router.init();
});
