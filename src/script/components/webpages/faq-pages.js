import { getFaq } from '../../data/fetch-api';

export class FaQpage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const faqApi = await getFaq();

      const faqList = document.createElement('div');
      faqList.classList.add('faq-list');

      faqApi.forEach((faq) => {
        faqList.innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed custome-accordion" type="button" data-bs-toggle="collapse" data-bs-target="#${faq.collapse}" aria-expanded="false" aria-controls="${faq.collapse}">
                ${faq.title}
            </button>
            </h2>
            <div id="${faq.collapse}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p class="fst-normal">${faq.content}</p>
            </div>
            </div>
        </div>
        `;
      });
      this.appendChild(faqList);
    } catch (error) {
      console.log(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('faq-website', FaQpage);