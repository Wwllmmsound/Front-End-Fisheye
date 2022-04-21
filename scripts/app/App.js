import { PhotographerApi } from '../api/Api.js'
import { PhotographerFactory } from '../factories/PhotographerFactory.js'

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
                const template = new PhotographerFactory(
                    photographer.name,
                    photographer.portrait,
                    photographer.city,
                    photographer.country,
                    photographer.tagline,
                    photographer.price
                );

                const photographerTemplate = template.photographerTemplate();
                const photographerSection = document.querySelector(".photographer_section");
                
                photographerSection.appendChild(photographerTemplate);

            });
    };
    async init() {
        // Récupère les datas des photographes
        const photographers = await this.photographersApi.getPhotographer();
        console.log(photographers);
        this.displayPhotographers(photographers);
    }
};
const app = new App();
app.init();
