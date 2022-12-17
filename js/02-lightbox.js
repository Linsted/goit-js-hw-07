import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListREF = document.querySelector('.gallery');
galleryListREF.innerHTML = crateMarkup(galleryItems);

function crateMarkup(items) {
    return items.map(item => `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`).join('')
};

var lightbox = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250,});