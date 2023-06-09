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
        <img src="${courses.pictUrl}" alt="${courses.tittle}" class="img-width">
        <h2>${courses.tittle}</h2>
        <p>${courses.desc}<p>
        <div class="materi">
        </div>
      `;

      const materiContainer = courseList.querySelector('.materi');

      courses.materi.forEach((materi) => {
        const materiItem = document.createElement('div');
        materiItem.innerHTML = `
          <p><strong>Course ID:</strong> ${materi.courseId}</p>
          <p><strong>Title:</strong> ${materi.title}</p>
        `;
        materiContainer.appendChild(materiItem);
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
