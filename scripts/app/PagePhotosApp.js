import { PhotographerApi } from '../api/Api.js'
import { PhotographerMedia } from '../models/PhotographerMedia.js'

class PagePhotosApp {
    constructor(){
        this.photosList = document.querySelector('#photosList')
        this.photographersApi = new PhotographerApi('../data/photographers.json')
    }

    async main(){
        const photographersData = await this.photographersApi.getMedia();
    };

    async displayPhotos(media){
        console.log(this.photosList);
        media.forEach((media)=>{
                const template = new PhotographerMedia (
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