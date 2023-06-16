import { getPath } from '../../data/fetch-api';

export class PathCourse extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const pathCourses = await getPath();

      const pathList = document.createElement('div');
      pathList.classList.add('path-list', 'categories', 'container');

      pathCourses.forEach((paths) => {
        pathList.innerHTML += `
                  <div class="categories-box">
                    <img src="${paths.pictUrl}" alt="${paths.name}" class="categories-img">
                    <a href="#" class="category-title text-decoration-none">${paths.name}</a>
                  </div>
              `;
      });
      this.appendChild(pathList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('path-course', PathCourse);