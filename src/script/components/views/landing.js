import { PathCourse } from '../webpages/pathCourse';

const home = {
  async render() {
    return `
          <h1>hello home</h1>
          <section>
            <div id="pathSection">

            </div>
            <div id="populerSection">
                <p>Course</p>
                <h2>Explore Popular Course</h2>
            </div>
          </section>
          `;
  },
  async afterRender() {
    const pathContainer = document.querySelector('#pathSection');
    const pathContent = new PathCourse();
    pathContainer.appendChild(pathContent);
  },
};

export default home;
