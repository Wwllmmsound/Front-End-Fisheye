import { PhotographerApi } from '../api/Api.js'
import { PhotographerImage } from '../models/PhotographerImage.js'
import { PhotographerVideo } from '../models/PhotographerVideo.js'
import { LikelistSubject } from '../likelist/Subject.js'
import { LikeListCounter } from '../likelist/Counter.js'

class PagePhotosApp {
    constructor(){
        this.photosList = document.querySelector('#photosList')
        this.photographersApi = new PhotographerApi('../data/photographers.json')

        this.LikelistSubject = new LikelistSubject()
        this.LikelistCounter = new LikeListCounter()

        this.LikelistSubject.subscribe(this.LikelistCounter)
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
                    media.price,
                    this.LikelistSubject
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
                    media.price,
                    this.LikelistSubject
                );

            });
    };
}

export { PagePhotosApp }