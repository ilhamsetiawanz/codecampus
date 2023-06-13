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
        <div class="container">
          <div class="jumbotron" style="margin-bottom: 3rem; background-color: #f8f9fa;">
            <div class="row">
              <div class="col-md-6">
                <h2 style="padding-top: 1rem; padding-bottom: 1rem;">${courses.tittle}</h2>
                <p class="lead" style="padding-bottom: 1rem;">Ayok Bersama Kita belajar memahami mengenai ${courses.tittle}.</p>
              </div>
              <div class="col-md-6">
                <img src="${courses.pictUrl}" alt="${courses.tittle}" class="img-width">
              </div>
            </div>
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
