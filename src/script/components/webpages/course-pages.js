import { getCourseList } from '../../data/fetch-api';

export class CourseList extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const ratingCourse = await getCourseList();

      const ratingList = document.createElement('div');
      ratingList.classList.add('rating-list', 'explore', 'container-xxl');

      ratingCourse.forEach((course) => {
        ratingList.innerHTML += `
        <div class="card explore-box hp-explore-box">
          <img src="${course.pictUrl}" alt="${course.tittle}" class="card-img-top explore-img">
          <div class="card-body">
            <a href="#/lesson/${course.id}" class="card-title explore-title text-decoration-none">${course.tittle}</a>
            <p class="card-text text-desc">${course.desc}</p>
          </div>
        </div>
          `;
      });
      this.appendChild(ratingList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('our-course', CourseList);