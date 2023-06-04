import { getPath } from '../../data/fetch-api';

export class pathCourse extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const pathCourses = await getPath();

      const pathList = document.createElement('div');
      pathList.classList.add('path-list');

      pathCourses.forEach((paths) => {
        pathList.innerHTML += `
              <div class="card" style="width: 18rem;">
                <img src="${paths.pictUrl}">
                <div class="card-body">
                    <a>${paths.name}</a>
                </div>
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

customElements.define('path-course', pathCourse);