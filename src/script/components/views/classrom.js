import { ClassRoomPage } from '../webpages/materi-pages';

const ClassRoom = {
  async render() {
    return `
        <section id="cp" class="container-fluid xl-padding">
          <section id="classRoom">
          
          </section>
        </section>
        `;
  },
  async afterRender() {
    const classContiner = document.querySelector('#classRoom');
    const classItems = new ClassRoomPage();

    classContiner.appendChild(classItems);
  },
};

export default ClassRoom;
