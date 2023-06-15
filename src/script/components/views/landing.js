import { PathCourse } from '../webpages/pathCourse';
import { TopCourse } from '../webpages/popular-pages';
import { FaQpage } from '../webpages/faq-pages';

const home = {
  async render() {
    return `
            <section class="home" id="home">
                <div class="hero-text jumbotron">
                    <span class="hero-title">Start Learning From Home</span>
                    <h2 class="hero-subtitle">
                        Connect With Our Expert And Start Learning Today
                    </h2>
                    <span class="hero-sub-subtitle">
                    Selamat datang di CodeCampus, website open source pembelajaran coding untuk pemula. 
                    Bergabunglah dengan komunitas inklusif kami dan mulai perjalanan belajar Anda hari ini. 
                    Mari ubah dunia melalui kode bersama-sama!
                    </span>
                    <div class="btn-hero container">
                        <a href="#" class="btn-hero find-btn text-decoration-none">Find Course</a>
                        <a href="#" class="btn-hero explore-btn text-decoration-none">Explore Course</a>
                    </div>
                </div>
            </section>
            <div id="pathSection" class="container-fluid path-section">
            </div>
            <div class="container populer-section" >
                <p class="text-center">Course</p>
                <h2 class="explore-container-title">Explore Popular Course</h2>
                <div id="populerSection" class="container-fluid">
                </div> 
            </div>
            <div class="container-l bg-body-secondary">
              <h2 class="text-center py-5">FAQ<h2>
              <div class="accordion  pb-5" id="accordionExample">
                
              </div>
            </div>
          </section>
          `;
  },
  async afterRender() {
    const pathContainer = document.querySelector('#pathSection');
    const pathContent = new PathCourse();
    pathContainer.appendChild(pathContent);

    const topContainer = document.querySelector('#populerSection');
    const topContent = new TopCourse();
    topContainer.appendChild(topContent);

    const faqContainer = document.querySelector('#accordionExample');
    const faqContent = new FaQpage();
    faqContainer.appendChild(faqContent);
  },
};

export default home;
