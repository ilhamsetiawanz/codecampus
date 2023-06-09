/* eslint-disable new-cap */
import Apps from './components/views/app';
import '../style/style.css';
import { getBlogs } from './data/fetch-api';

getBlogs();
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