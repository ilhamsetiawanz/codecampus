/* eslint-disable new-cap */
import Apps from './components/views/app';
import '../style/style.css';
import '../style/lesson.css';
import '../style/responsive.css';
import '../style/explore.css';
import '../style/about.css';
import '../style/hero.css';

const app = new Apps({
  navbar: document.querySelector('#navigation-bars'),
  content: document.querySelector('#main-Content'),
  footer: document.querySelector('#footers'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});