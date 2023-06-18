import { CourseList } from '../webpages/course-pages';

const Courses = {
  async render() {
    return `
    <div class="container-fluid">
      <div class="populer-section pt-5 bg-body-tertiary" >
        <h2 class="explore-container-title mt-1 fw-bold fs-3">All Course</h2>
          <div id="courseSection" class="container pt-3">
          </div> 
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