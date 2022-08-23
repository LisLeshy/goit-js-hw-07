import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const containerForGallery = document.querySelector(".gallery");

let galleryItemEl = "";
const makeGallery = galleryItems.map((key) => {
  galleryItemEl += `
        <div class="gallery__item">
        <a class="gallery__link" href="#">
                <img
                    class="gallery__image"
                    src="${key.preview}"
                    data-source="${key.original}"
                    alt="${key.description}"
                />
                </a>
        </div>`;
});
console.log(makeGallery);

containerForGallery.insertAdjacentHTML("afterbegin", galleryItemEl);

containerForGallery.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e.target);
}

function onOpenModal(e) {
  console.log(e.target.dataset.source);
}
containerForGallery.addEventListener("click", onOpenModal);
