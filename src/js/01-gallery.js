import { galleryItems } from './gallery-items.js';




const galleryDivREF = document.querySelector('.gallery');



createGalleryMarkup(galleryItems);
galleryDivREF.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {


  const galleryMarkup = galleryItems.map(({original, preview, description}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`).join('')
  
  
  return galleryMarkup;
}
