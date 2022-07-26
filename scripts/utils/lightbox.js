import { LightboxModal } from "../models/LightboxModal.js";
import { PhotographerApi } from "../api/Api.js";
import { PhotographerMedia } from "../models/PhotographerMedia.js";

export function lightbox() {
  // const photographersApi = new PhotographerApi('../data/photographers.json');
  // const allPhotos = photographersApi.getMedia();
  // const mediaContainer = document.getElementById('photosList');
  // const pictures = document.querySelectorAll('.item');
  // var photographerMedia_ = new PhotographerMedia();
  // pictures.forEach(element => {
  //     element.addEventListener("click", (e) => {
  //         // let medias = photographerMedia_.getMediaByPhotographer();
  //         // let media;
  //         let mediaId = e.currentTarget.id;
  //         console.log(mediaId);
  //         // for(let selectedMedia of medias){
  //         //     if(selectedMedia.imageId == mediaId){
  //         //         media = selectedMedia;
  //         //     }
  //         // }
  //         // let title = "";
  //         // for (let media of mediaContainer) {
  //         //     if (mediaId == id) {
  //         //         title = media.title;
  //         //     }
  //         // }
  //         let lightbox = new LightboxModal(mediaId, title);
  //         lightbox.displayModal();
  //     })
  // });
}
