import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);


const makeGalleryMarkup = galleryItem => {
  return `<li class="gallery__item">
  <a  href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" 
    alt="${galleryItem.description}" />
  </a>
  </li>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', makeGallery);


const gallery = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
  scrollZoom: false,
});
