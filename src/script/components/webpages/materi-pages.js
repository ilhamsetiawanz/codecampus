import UrlParser from '../../routers/url-parser';
import { getMateri } from '../../data/fetch-api';

export class ClassRoomPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const materi = await getMateri(url.id);
      const materiList = document.createElement('div');
      materiList.classList.add('materi-list', 'container-l'); // pada bagian ini jika menambahkan class untuk melakukan style//

      const additionalResources = materi.resources && materi.resources.additionalResources;

      materiList.innerHTML = `
        <div class="jumbotron py-5 bg-opacity-60" style="height: 400px; background-color: rgba(0, 0, 0, 0.7); position: relative;">
              <img src="${materi.pictUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; filter: grayscale(40%); z-index: -1;">
              <div class="container text-center justify-content-center">
                <h1 class="display-4 fs-1 fw-bolder text-white">${materi.title}</h1>
                <p class="lead fs-6 text-white">Jangan pernah berhenti belajar. Di dunia coding, ada selalu hal baru yang bisa dipelajari dan dikuasai.<br> Teruslah eksplorasi dan berani mengambil tantangan baru.</p>
                <a href="#/lesson/${materi.courseId}">
                  <button class="btn-custom btn-lg">Kembali Ke Koridor</button>
                </a>
              </div>
        </div>
        <div class="item-materi container-fluid py-5 bg-body-tertiary ">  
          <div class="intro pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">Pengenalan</h3>
            <p class="fs-6 text-justify">${materi.introduction}</p>
          </div>
          <div class="overview pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">Penjelasan Kelas</h3>
            <p class="fs-6 text-justify">${materi.LessonOverview}</p>
          </div>
          <div class="lesson pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">${materi.lessons.title}</h3>
            <p class="fs-6 text-justify">${materi.lessons.content}</p>
            ${materi.lessons.subContent.map((sub) => `
              <div class="sub-lesson pb-3">
                <h4 class="fs-5 fw-bold code-campus-second">${sub.subTitle}</h4>
                <p class="fs-6 text-justify">${sub.subMateri}</p>
                <img class="materi-img pb-3" src="${sub.subImg}">
              </div>
            `).join('')}
          </div>
          <div class="assignment pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">Tugas</h3>
            <p class="fs-6 text-justify">${materi.Assignment}</p>
          </div>
          <div class="knowledge-check pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">Kuis</h3>
            <p class="text-justify">${materi.knowledgeCheck}</p>
          </div>
          <div class="additional-resources pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">Sumber Daya Tambahan</h3>
            <p class="text-justify">Gunakan daftar link yang ada pada dibawah ini sebagai sumber pengentahuan lainnya dan juga bahan bacaan anda dalam memahami materi yang ada pada kelas  kali ini.</p>
            ${additionalResources ? `
              <ul>
                ${additionalResources.map((resource) => `
                  <li class="fs-6 text-body-tertiary"><a class="fs-6 adational-stlye" href="${resource.link}" target="_blank">${resource.title}</a></li>
                `).join('')}
              </ul>
            ` : ''}
          </div>
          <div class="kesimpulan pb-3">
            <h3 class="fs-5 fw-bold code-campus-second">Kesimpulan</h3>
            <p class="fs-6 text-justify">${materi.conclution}</p>
          </div>
        </div>
      `;

      this.appendChild(materiList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load course data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('materi-pages', ClassRoomPage);
