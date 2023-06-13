import { ClassRoomPage } from '../webpages/materi-pages';

const ClassRoom = {
  async render() {
    return `
        <section id="cp" class="container-fluid">
        
        </section>
        `;
  },
  async afterRender() {
    const apaAja = document.querySelector('#cp');
    const iniAja = new ClassRoomPage();

    apaAja.appendChild(iniAja);
  },
};

export default ClassRoom;
