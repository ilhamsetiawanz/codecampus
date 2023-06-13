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
      materiList.classList.add('materi-list', 'container-fluid'); // pada bagian ini jika menambahkan class untuk melakukan style//

      const additionalResources = materi.resources && materi.resources.additionalResources;

      materiList.innerHTML = `
        <div class="intro">
          <h3>Pengenalan</h3>
          <p class="text-justify">${materi.introduction}</p>
        </div>
        <div class="overview">
          <h3>Penjelasan Kelas</h3>
          <p class="text-justify">${materi.LessonOverview}</p>
        </div>
        <div class="lesson">
          <h3>${materi.lessons.title}</h3>
          <p class="text-justify">${materi.lessons.content}</p>
          ${materi.lessons.subContent.map((sub) => `
            <div class="sub-lesson">
              <h4>${sub.subTitle}</h4>
              <p class="text-justify">${sub.subMateri}</p>
            </div>
          `).join('')}
        </div>
        <div class="assignment">
          <h3>Tugas</h3>
          <p class="text-justify">${materi.Assignment}</p>
        </div>
        <div class="knowledge-check">
          <h3>Kuis</h3>
          <p class="text-justify">${materi.knowledgeCheck}</p>
        </div>
        <div class="additional-resources">
          <h3>Sumber Daya Tambahan</h3>
          ${additionalResources ? `
            <ul>
              ${additionalResources.map((resource) => `
                <li><a href="${resource.link}" target="_blank">${resource.title}</a></li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
        <div class="kesimpulan">
          <h3>Kesimpulan</h3>
          <p class="text-justify">${materi.conclution}</p>
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
