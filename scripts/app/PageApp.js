import { PhotographerApi } from '../api/Api.js'
import { PhotographerPage } from '../models/PhotographerPage.js'

class PageApp {
    constructor(){
        this.photographersHead = document.querySelector('#photographerHeader')
        this.photographersApi = new PhotographerApi('../data/photographers.json')
    }

    async main(){
        const photographersData = await this.photographersApi.getPhotographer();
    };

    // Fonction qui doit changer en rapport avec l'ID des photographers

    async displayPhotographerPage(photographer){
            const template = new PhotographerPage(
                photographer.name,
                photographer.portrait,
                photographer.city,
                photographer.country,
                photographer.tagline,
                photographer.price,
                photographer.id
            );

        const photographerHeader = template.photographerHeader();
        const photographerProfilePic = template.photographerProfilePic();

        const photographerSection = document.querySelector("#photographerHeader");
        const photographerImg = document.querySelector("#photographerProfilPic");

        photographerSection.appendChild(photographerHeader);
        photographerImg.appendChild(photographerProfilePic);

            // Rechercher if statement ou autre methode pour afficher la page en fonction de l'ID
//
            // if (photographer.id)


    };
    async init() {
        const photographersHead = await this.photographersApi.getPhotographer();
        console.log(photographersHead);
        this.displayPhotographerPage(photographersHead);

        const article = document.createElement("div");
    };
}

const pageApp = new PageApp();
pageApp.init();

export { PageApp }