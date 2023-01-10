import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector(".gallery");

const itemMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemMarkup);

galleryContainer.addEventListener("click", onContainerClick);

function createGalleryItem(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
      .join("");   
}


function onContainerClick(e) {
  e.preventDefault();

  if (!e.target.nodeName !== "IMG") {
    return;
  }
    

}


const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionsDelay: 250,
});
 
