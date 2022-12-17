import { galleryItems } from './gallery-items.js';


//REFS//
const galleryDivREF = document.querySelector('.gallery');
//  --  //




galleryDivREF.innerHTML = createGalleryMarkup(galleryItems);
galleryDivREF.addEventListener('click', getFullImgLink);


function createGalleryMarkup(items) {

 return items.map(({original, preview, description}) => `<div class="gallery__item">
  <a class="gallery__link">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
  </div>`).join('')
  
};


function getFullImgLink(event) {
  if (event.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`<img
      class="gallery__image is-active"
      src="${event.target.dataset.source}"
    />`,).show();
  
  
  
};







