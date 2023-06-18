import { getCourses } from '../../data/fetch-api';

import UrlParser from '../../routers/url-parser';

export class LessonPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const courses = await getCourses(url.id);
      const courseList = document.createElement('div');
      courseList.classList.add('course-list');

      courseList.innerHTML = `
      <div class="jumbotron py-5 bg-opacity-60" style="height: 400px; background-color: rgba(0, 0, 0, 0.7); position: relative;">
        <img src="${courses.pictUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; filter: grayscale(40%); z-index: -1;">
        <div class="container text-center justify-content-center">
          <h1 class="display-4 fs-1 fw-bolder text-white">${courses.tittle}</h1>
          <p class="lead fs-6 text-white">Jangan pernah berhenti belajar. Di dunia coding, ada selalu hal baru yang bisa dipelajari dan dikuasai.<br> Teruslah eksplorasi dan berani mengambil tantangan baru.</p>
        </div>
      </div>
    <div class="bg-body-tertiary py-5">
      <div class="container-xxl">
        <div class="card shadow-sm mb-4 pt-3 px-4">
          <h2 class="code-campus-second fs-4 fw-bold">Deskripsi</h2>
          <p class="fs-6">${courses.desc}<p>
        </div>
        <div class="card shadow-sm mb-4 pt-3 px-4">
          <h2 class="code-campus-second fs-4 fw-bold">Materi</h2>
          <div class="materi list-group mb-5 ls-card">
          
          </div>
        </div>
        <div class="card shadow-sm mb-4 pt-3 px-4">
          <h2 class="fs-4 fw-bold code-campus-second">Persiapan Kelas</h2>
          <p class="fs-6">${courses.preps}</p>
        </div>
      </div>
    </div>
      `;

      const materiContainer = courseList.querySelector('.materi');

      courses.materi.forEach((materi) => {
        const materiItem = document.createElement('div');
        materiItem.innerHTML = `
          <a class="fs-6 list-group-item py-3 mb-1" href="#/classroom/${materi.classId}"><i class="text-black-50 fa fa-book" aria-hidden="true"></i> ${materi.title}</a>
        `;
        materiContainer.appendChild(materiItem);
      });

      courses.projects.forEach((project) => {
        const projectsItem = document.createElement('div');
        projectsItem.innerHTML = `
          <a class="fs-6 list-group-item py-3 hover:bg-grey-700" href="#/project/${project.id}"><i class="text-black-50 fa fa-tasks" aria-hidden="true"></i> ${project.title}</a>
        `;
        materiContainer.appendChild(projectsItem);
      });

      this.appendChild(courseList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load course data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('lesson-pages', LessonPage);
