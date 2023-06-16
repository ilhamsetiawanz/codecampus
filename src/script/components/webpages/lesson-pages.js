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
      const courseList = document.createElement('div'); // pada bagian ini jika menambahkan class untuk melakukan style//
      courseList.classList.add('course-list');

      courseList.innerHTML = `
        <div class="jumbotron py-5 bg-opacity-60" style="height: 400px; background-color: rgba(0, 0, 0, 0.7); position: relative;">
          <img src="${courses.pictUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; filter: grayscale(40%); z-index: -1;">
          <div class="container text-center justify-content-center">
            <h1 class="display-4 fs-1 fw-bolder text-white">${courses.tittle}</h1>
            <p class="lead fs-6 text-white">Jangan pernah berhenti belajar. Di dunia coding, ada selalu hal baru yang bisa dipelajari dan dikuasai.<br> Teruslah eksplorasi dan berani mengambil tantangan baru.</p>
          </div>
        </div>      
        <p>${courses.desc}<p>
        <div class="materi ">
          <h2>Materi</h2>
        </div>
      `;

      const materiContainer = courseList.querySelector('.materi');

      courses.materi.forEach((materi) => {
        const materiItem = document.createElement('div');
        materiItem.innerHTML = `
          <a href="#/classroom/${materi.classId}"><strong>Title:</strong> ${materi.title}</a>
        `;
        materiContainer.appendChild(materiItem);
      });

      courses.projects.forEach((project) => {
        const projectsItem = document.createElement('div');
        projectsItem.innerHTML = `
          <a href="#/classroom/${project.id}"><strong>Title:</strong> ${project.title}</a>
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
