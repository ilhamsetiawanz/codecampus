import { getDummy } from "../../data/fetch-api";

export class aboutPage extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const about = await getDummy();

        const aboutList = document.createElement('div');
        aboutList.classList.add('about-list');

        about.forEach((abouts) => {
            const aboutContiner = document.createElement('div');
            aboutContiner.classList.add('about-continer');
            aboutContiner.innerHTML =`
            <img src="${abouts.imgPict}" alt="${abouts.name}">
            <h2>${abouts.name}</h2>
            `;
            aboutList.appendChild(aboutContiner)
        });
        this.appendChild(aboutList);
    }
}

customElements.define('about-page', aboutPage);
