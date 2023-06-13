import UrlParser from '../../routers/url-parser';
import { getMateri } from '../../data/fetch-api';

export class ClassRoomPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const materi = await getMateri(url.id);
      const materiList = document.createElement('div');
      materiList.classList.add('materi-list', 'contiainer-fluid');

      materiList.innerHTML = `
        <div class="intro">
          <h3>Pengenalan</h3>
          <p>${materi.introduction}</p>
        </div>
        <div class="overview">
          <h3>Penjelasan Kelas</h3>
          <p>${materi.LessonOverview}</p>
        </div>
        <div class="lesson">
        
        </div>
      `;
      this.appendChild(materiList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load course data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('materi-pages', ClassRoomPage);
