import { LessonPage } from '../webpages/lesson-pages';

const lesson = {
  async render() {
    return `
        <section id="lessonSection">
        
        </section>
        `; // pada bagian section jika menambahkan class untuk melakukan style//
  },
  async afterRender() {
    const lessonSection = document.querySelector('#lessonSection');
    const lessonContent = new LessonPage();

    lessonSection.appendChild(lessonContent);
  },
};

export default lesson;