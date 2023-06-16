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
                <h2 class="explore-container-title fw-bold">Explore Popular Course</h2>
                <div id="populerSection" class="container-fluid">
                </div> 
            </div>
            <div class="container-l bg-body-secondary">
              <h2 class="text-center py-5 fw-bold">FAQ<h2>
              <div class="accordion  pb-5" id="accordionExample">
                
              </div>
            </div>
            <div class="container p-5">
              <h2 class="text-center fw-bold">Testimonial User CodeCampus</h2>
              <div class="container-xl pt-5">
              <div class="row">
                <div class="col-md-6">
                  <div class="testimonial-card">
                    <img src="./asset/rey.jpeg" class="card-img-top" alt="Testimonial 1">
                    <div class="card-body">
                      <h5 class="card-title fw-normal">Rey</h5>
                      <p class="card-text">CodeCampus luar biasa! Tutorial interaktifnya membantu saya menguasai pemrograman dengan mudah dan menyenangkan. 
                        Berkat CodeCampus, saya berhasil mendapatkan pekerjaan sebagai junior developer.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="testimonial-card">
                    <img src="./asset/peter.jpeg" class="card-img-top" alt="Testimonial 2">
                    <div class="card-body">
                      <h5 class="card-title fw-normal">Peter Griffin</h5>
                      <p class="card-text">CodeCampus sangat direkomendasikan! Dengan panduan langkah demi langkah dan latihan praktisnya, saya bisa memahami pemrograman dengan mudah.
                         Sekarang saya bekerja sebagai pengembang web berkat CodeCampus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6">
                  <div class="testimonial-card">
                    <img src="./asset/miguel.jpeg" class="card-img-top" alt="Testimonial 3">
                    <div class="card-body">
                      <h5 class="card-title fw-normal">Miguel Ohara</h5>
                      <p class="card-text">Materi pelajaran di CodeCampus sangat komprehensif dan berkualitas. Saya sangat mengapresiasi forum komunitasnya yang membantu saya dalam belajar. 
                        CodeCampus berperan penting dalam perkembangan profesional saya.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="testimonial-card">
                    <img src="./asset/tom.jpeg" class="card-img-top" alt="Testimonial 4">
                    <div class="card-body">
                      <h5 class="card-title fw-normal">Tom Holland</h5>
                      <p class="card-text">CodeCampus adalah penyelamat bagi saya! Sebagai pemula dalam dunia pemrograman, saya merasa terbantu dengan tutorial-tutorial interaktif yang disediakan oleh CodeCampus.</p>
                    </div>
                  </div>
                </div>
              </div>
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
