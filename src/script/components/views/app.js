import UrlParser from '../../routers/url-parser';
import routes from '../../routers/routes';

class Apps {
  constructor({
    button, navbar, navDrawer, content, footer,
  }) {
    this._button = button;
    this._navbar = navbar;
    this._navDrawer = navDrawer;
    this._content = content;
    this._footer = footer;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default Apps;