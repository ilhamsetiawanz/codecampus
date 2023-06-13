import { LessonPage } from '../webpages/lesson-pages';

const lesson = {
  async render() {
    return `
        <section id="lessonSection">
        
        </section>
        `;
  },
  async afterRender() {
    const lessonSection = document.querySelector('#lessonSection');
    const lessonContent = new LessonPage();

    lessonSection.appendChild(lessonContent);
  },
};

export default lesson;