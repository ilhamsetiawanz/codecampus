import { getPath } from '../../data/fetch-api';

export class PathCourse extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const pathCourses = await getPath();

      const pathList = document.createElement('div');
      pathList.classList.add('path-list');
      pathList.classList.add('row', 'justify-content-center', 'gap-5'); // gunakan line ini untuk melakukan style parent element pada cards//

      pathCourses.forEach((paths) => {
        pathList.innerHTML += `
              <div class="card card-width">
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

customElements.define('path-course', PathCourse);