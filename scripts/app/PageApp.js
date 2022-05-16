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
    };
}
export { PageApp }