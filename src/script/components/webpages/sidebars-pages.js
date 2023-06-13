// import { getMateri } from '../../data/fetch-api';
// import UrlParser from '../../routers/url-parser';

// export class SideBars extends HTMLElement {
//   constructor() {
//     super();
//   }

//   async connectedCallback() {
//     try {
//       const url = UrlParser.parseActiveUrlWithoutCombiner();
//       const courses = await getMateri(url.id);
//       const sidebarsItem = document.createElement('div');
//       sidebarsItem.classList.add('sidebar-item');

//       sidebarsItem.innerHTML = `
//         <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
//             <div class="offcanvas-header">
//                 <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">${courses.title}</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div class="offcanvas-body">
//                 <p>Try scrolling the rest of the page to see this option in action.</p>
//             </div>
//         </div>
//       `;
//       this.appendChild(sidebarsItem);
//     } catch (error) {
//       const errorMessage = document.createElement('p');
//       errorMessage.textContent = 'Failed to load course data';
//       this.appendChild(errorMessage);
//     }
//   }
// }

// customElements.define('sidebar-item', SideBars);