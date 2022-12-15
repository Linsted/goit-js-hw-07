import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryDivREF = document.querySelector('.gallery')
galleryDivREF.innerHTML = `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`

// const galleryMarkup = `<div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>`


function createMarkup(galleryItems) {
    
}
