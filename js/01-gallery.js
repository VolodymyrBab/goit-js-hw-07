import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);


const makeGalleryMarkup = galleryItem => {
  return `
  <div class="gallery__item">
    <a href="${galleryItem.original}" class="gallery__link">
      <img
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}" 
        data-source="${galleryItem.original}"
        class="gallery__image"
        >
    </a>
  </div>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', makeGallery);



function onClickImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const imageLink = evt.target.dataset.source;
  // console.log(imageLink);

  const instance = basicLightbox.create(`
		<img width="1200" src="${imageLink}" class="gallery__image">
	`)
  instance.show();


  document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    instance.close()
  }
});
}

galleryRef.addEventListener('click', onClickImage);