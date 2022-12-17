import { galleryItems } from './gallery-items.js';


//REFS//
const galleryDivREF = document.querySelector('.gallery');
//  --  //




createGalleryMarkup(galleryItems);

galleryDivREF.innerHTML = createGalleryMarkup(galleryItems);

galleryDivREF.addEventListener('click', getFullImgLink);


function createGalleryMarkup(items) {

 const galleryMarkup = galleryItems.map(({original, preview, description}) => `<div class="gallery__item">
  <a class="gallery__link">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
  </div>`).join('')
  
  
  return galleryMarkup;
};
function getFullImgLink(event) {
  if (event.target.nodeName !== 'IMG') return;



event.target.classList.add('is-active')
  const instance = basicLightbox.create(`<img
      class="gallery__image is-active"
      src="${event.target.dataset.source}"
    />`,).show();
  
  
  
};







