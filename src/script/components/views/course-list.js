import { CourseList } from '../webpages/course-pages';

const Courses = {
  async render() {
    return `
    <div class="container-fluid populer-section" >
      <h2 class="explore-container-title">All Course</h2>
        <div id="courseSection" class="container-fluid">
        </div> 
    </div>
            `;
  },
  async afterRender() {
    const topContainer = document.querySelector('#courseSection');
    const topContent = new CourseList();
    topContainer.appendChild(topContent);
  },
};

export default Courses;