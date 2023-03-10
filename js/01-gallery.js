import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector (".gallery");

const itemMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemMarkup);

galleryContainer.addEventListener("click", onContainerClick);


function createGalleryItem(gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;}).join('');
    
}

function onContainerClick (e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
      return;
    }


console.log(e.target.dataset.source);


const instance = basicLightbox.create(
  `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscPress);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onEscPress);
    }
  }
);

instance.show();
    
  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
    
  }

}
