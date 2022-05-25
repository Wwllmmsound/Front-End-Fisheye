import { PhotographerApi } from '../api/Api.js'
import { PhotographerModel } from '../models/PhotographerModel.js'
import { PhotographerMedia } from './PhotographerMedia.js'
import { LikeListCounter } from '../likelist/Counter.js'
import { LikelistSubject } from '../likelist/Subject.js'



class App {
    constructor() {
        this.photographers = document.querySelector('#photographers')
        this.photographersApi = new PhotographerApi('../data/photographers.json')
    };

    async main(){
        const photographersData = await this.photographersApi.getPhotographer();
    };

    async displayPhotographers(photographer){
        console.log(this.photographers);
        photographer.forEach((photographer)=>{
                const template = new PhotographerModel(
                    photographer.name,
                    photographer.portrait,
                    photographer.city,
                    photographer.country,
                    photographer.tagline,
                    photographer.price,
                    photographer.id
                );

                const photographerTemplate = template.photographerTemplate();
                const photographerSection = document.querySelector(".photographer_section");
                
                photographerSection.appendChild(photographerTemplate);

            });
    }

    async displayLikes(media){
        media.forEach((media) => {
            const addLikes = new MediaLikes(
                media.photographerId,
                media.title,
                media.image,
                media.video,
                media.likes,
                media.date,
                media.price
            );
        });

        addLikes.mediaLikes();
    }
    async init() {
        // Récupère les datas des photographes
        const photographers = await this.photographersApi.getPhotographer();

        this.displayPhotographers(photographers);

        const article = document.createElement("article");
    }
};
const app = new App();
app.init();