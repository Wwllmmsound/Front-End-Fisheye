import { lightboxModal } from "../models/lightboxModal.js";
import { PhotographerApi } from "../api/Api.js";
import { PhotographerMedia } from "../models/PhotographerMedia.js";

export function lightbox(){

    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();
    const mediaContainer = document.getElementById('photosList');
    const item = document.querySelector('.item');
    var photographerMedia_ = new PhotographerMedia();


    item.addEventListener("click", (e) => {
        photographerMedia_.getMediaByPhotographer(photographerMedia_.image);

        console.log(photographerMedia_.image);
    })
}

