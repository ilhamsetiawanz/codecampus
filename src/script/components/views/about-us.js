const aboutUs = {
  async render() {
    return `
    
    <h2 class="text-center fs-3 py-5 fw-bold">CodeCampus Team</h2>
        <div class="main-container container-xl mb-5">
            <!-- container -->
            <div class="cards">
                <!-- profile image -->
                <div class="text-center">
                    <img class="img-fluid" src="./asset/ilham.png" alt="Ilham Setiawan"/>
                </div>
                <!-- profile detail -->
                <h4 class="text-center fs-6">La Ode Muh. Ilham Setiawan</h4>
                <p class="text-center text-prof">Universitas Halu Oleo</p>

                <!-- social Media Links -->
                <div class="social-media text-center">
                    <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://github.com/ilhamsetiawanz" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/_ilameeeeee_/?igshid=ZDc4ODBmNjlmNQ==" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/la-ode-muhammad-ilham-setiawan-6b1872262/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div class="cards">
                <!-- profile image -->
                <div class="text-center">
                    <img class="img-fluid" src="./asset/boy.jpg" alt=""/>
                </div>
                <!-- profile detail -->
                <h4 class="text-center fs-6">Boy Boy Geodevandry</h4>
                <p class="text-center text-prof">Universitas Tanjungpura</p>

                <!-- social Media Links -->
                <div class="social-media text-center">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/whosboyy/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/boy-boy-geodevandry-04535723b/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div class="cards">
                <!-- profile image -->
                <div class="text-center">
                    <img class="img-fluid" src="./asset/akmal.png" alt=""/>
                </div>
                <!-- profile detail -->
                <h4 class="text-center fs-6">Akmal Putra Arianda</h4>
                <p class="text-center text-prof">Universitas Tanjungpura</p>

                <!-- social Media Links -->
                <div class="social-media text-center">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div class="cards">
                <!-- profile image -->
                <div class="text-center">
                    <img class="img-fluid" src="#" alt=""/>
                </div>
                <!-- profile detail -->
                <h4 class="fs-6 text-center">Raisul Amin R</h4>
                <p class="text-center text-prof">Universitas Muhammadiyah <br> Parepare</p>

                <!-- social Media Links -->
                <div class="social-media text-center">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        `;
  },
  async afterRender() {
    // const lessonSection = document.querySelector('#lessonSection');
    // const lessonContent = new LessonPage();

    // lessonSection.appendChild(lessonContent);
  },
};

export default aboutUs;