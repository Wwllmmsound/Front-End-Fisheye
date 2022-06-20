import { lightboxModal } from "../models/lightboxModal.js";
import { PhotographerApi } from "../api/Api.js";
import { PhotographerMedia } from "../models/PhotographerMedia.js";

export function lightbox(photographerName, photographerId){

    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();
    const mediaContainer = document.getElementById('photosList');
    const pictures = document.querySelectorAll('.item');
    var photographerMedia_ = new PhotographerMedia();


    pictures.forEach(element => {
        element.addEventListener("click", (e) => {

            console.log(e.target.id);

            // let medias = photographerMedia_.getMediaByPhotographer();
            // let media;
            let mediaId = e.currentTarget.id;
            // for(let selectedMedia of medias){
            //     if(selectedMedia.imageId == mediaId){
            //         media = selectedMedia;
            //     }
            // }
            let title = "";
            let lightbox = new lightboxModal(mediaId, title, photographerName);
            lightbox.displayModal();
        })
    });
}