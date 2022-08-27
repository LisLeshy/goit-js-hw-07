import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const containerForGallery = document.querySelector(".gallery");
const galleryMarkap = makeGallery(galleryItems);
containerForGallery.insertAdjacentHTML("afterbegin", galleryMarkap);

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// v2

// let galleryItem = "";
// const buildGallery = galleryItems.map(({ original, preview, description }) => {
//   galleryItem += `
//         <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//                 <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//                 </a>
//         </div>`;
// });

// containerForGallery.innerHTML = galleryItem;

// const lightbox = new SimpleLightbox(".gallery__link", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
