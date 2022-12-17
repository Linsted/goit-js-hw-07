import { galleryItems } from './gallery-items.js';


//REFS//
const galleryDivREF = document.querySelector('.gallery');
const galleryLinkREF = document.querySelector('gallery__link')
const imgREF = document.querySelector('img')
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


  const instance = basicLightbox.create(`<img
      class="gallery__image is-active"
      src="${event.target.dataset.source}"
    />`).show();
  
  
  
};

// document.addEventListener('keydown', (event) => {
//     console.log(event.code);
//     if (event.code === `KeyQ`) { instance.close()};
//   });

///






