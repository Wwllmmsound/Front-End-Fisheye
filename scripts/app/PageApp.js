import { PhotographerApi } from '../api/Api.js'
import { PhotographerPage } from '../factories/PhotographerPage.js'

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

            // Rechercher if statement ou autre methode pour afficher la page en fonction de l'ID
//
            // if (photographer.id)


    }
    async init() {
        const photographerHeader = template.photographerHeader();
        const photographerProfilePic = template.photographerProfilePic();

        const photographerSection = document.querySelector("#photographerHeader");

        photographerSection.appendChild(photographerHeader);
        photographerSection.appendChild(photographerProfilePic);
    }
}

const pageApp = new PageApp();
pageApp.init();

export { PageApp }