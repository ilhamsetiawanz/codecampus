import { getRating } from '../../data/fetch-api';

export class TopCourse extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const ratingCourse = await getRating();

      const ratingList = document.createElement('div');
      ratingList.classList.add('rating-list', 'explore', 'container-fluid');

      ratingCourse.slice(0, 6).forEach((rating) => {
        ratingList.innerHTML += `
        <div class="card explore-box hp-explore-box">
          <img src="${rating.pictUrl}" alt="${rating.tittle}" class="card-img-top explore-img">
          <div class="card-body">
            <a href="#/lesson/${rating.id}" class="card-title explore-title text-decoration-none">${rating.tittle}</a>
            <p class="card-text text-desc">${rating.desc}</p>
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

customElements.define('top-course', TopCourse);