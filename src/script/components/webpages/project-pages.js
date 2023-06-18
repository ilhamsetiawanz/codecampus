import UrlParser from '../../routers/url-parser';
import { getProject } from '../../data/fetch-api';

export class ProjectPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const projects = await getProject(url.id);
      const projectList = document.createElement('div');
      projectList.classList.add('project-list');

      projectList.innerHTML = `
            <div class="jumbotron py-5 bg-opacity-60" style="height: 400px; background-color: rgba(0, 0, 0, 0.7); position: relative;">
            <img src="${projects.pictUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; filter: grayscale(40%); z-index: -1;">
                <div class="container text-center justify-content-center">
                <h1 class="display-4 fs-1 fw-bolder text-white">${projects.title}</h1>
                <p class="lead fs-6 text-white">Jangan pernah berhenti belajar. Di dunia coding, ada selalu hal baru yang bisa dipelajari dan dikuasai.<br> Teruslah eksplorasi dan berani mengambil tantangan baru.</p>
                <a href="#/lesson/${projects.courseId}">
                    <button class="btn-custom btn-lg">Kembali Ke Koridor</button>
                </a>
                </div>
            </div>
            <div class="item-materi container-fluid py-5 bg-body-tertiary">
                <div class="card p-5 shadow-sm mb-4">
                    <h2 class="fs-5 fw-bold code-campus-second">Pengenalan</h2>
                    <p class="fs-6">${projects.intro}</p>
                </div>
                <div class="card p-5 shadow-sm">
                    <h2 class="fs-5 fw-bold code-campus-second">${projects.title}</h2>
                    <p class="fs-6">${projects.content}</p>
                </div>
            </div>
            `;
      this.appendChild(projectList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('project-pages', ProjectPage);