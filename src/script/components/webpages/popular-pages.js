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
        <div class="explore-box hp-explore-box">
          <img src="${rating.pictUrl}" alt="${rating.tittle}" class="explore-img">
          <a href="#/lesson/${rating.id}" class="explore-title text-decoration-none">${rating.tittle}</a>
          <p class="card-text text-desc">${rating.desc}</p>
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