import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const containerForGallery = document.querySelector(".gallery");
const galleryMarkap = makeGallery(galleryItems);
containerForGallery.insertAdjacentHTML("afterbegin", galleryMarkap);

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="#">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"

                     
                    alt="${description}"
                />
                </a>
        </div>`;
    })
    .join("");
}
// console.log(galleryMarkap);

function openModal(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600" >
	`);
  instance.show();
  function onEscKeyPress(e) {
    if (!basicLightbox.visible()) {
      return;
    }
    console.log(basicLightbox);

    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
    console.log(e.code);
  }
  window.addEventListener("keydown", onEscKeyPress);
}
containerForGallery.addEventListener("click", openModal);
