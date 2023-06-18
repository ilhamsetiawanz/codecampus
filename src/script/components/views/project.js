import { ProjectPage } from '../webpages/project-pages';

const projects = {
  async render() {
    return `
        <section id="Project">
        
        </section>
        `; // pada bagian section jika menambahkan class untuk melakukan style//
  },
  async afterRender() {
    const projectSection = document.querySelector('#Project');
    const projectContent = new ProjectPage();

    projectSection.appendChild(projectContent);
  },
};

export default projects;