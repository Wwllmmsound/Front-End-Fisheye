import { PhotographerApi } from '../api/Api.js'
import { PhotographerImage } from '../models/PhotographerImage.js'
import { PhotographerVideo } from '../models/PhotographerVideo.js'

class PagePhotosApp {
    constructor(){
        this.photosList = document.querySelector('#photosList')
        this.photographersApi = new PhotographerApi('../data/photographers.json')
    }

    async main(){
        const photographersData = await this.photographersApi.getMedia();
    };

    async displayPhotos(media){
        media.forEach((media)=>{
                const template = new PhotographerImage (
                    media.id,
                    media.photographerId,
                    media.title,
                    media.image,
                    media.likes,
                    media.date,
                    media.price
                );
            });
    };

    async displayVideos(media){
        media.forEach((media)=>{
                const template = new PhotographerVideo (
                    media.id,
                    media.photographerId,
                    media.title,
                    media.image,
                    media.likes,
                    media.date,
                    media.price
                );

            });
    };
}

export { PagePhotosApp }