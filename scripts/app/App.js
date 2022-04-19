import { PhotographerList } from '../factories/photographerList';

class App {
    constructor() {
        this.photographers = document.querySelector('#photographers')
        this.photographersApi = new PhotographerApi('./data/photographers.json')
    };

    async main(){
        const photographersData = await this.photographersApi.getPhotographer();
    };

    async displayPhotographers(photographers){

        photographers.forEach((photographers)=>{
                const template = new photographerList(
                    photographers.id,
                    photographers.name,
                    photographers.portrait,
                    photographers.city,
                    photographers.country,
                    photographers.price,
                    photographers.tagline
                );
                this.photographers.appendChild(template.photographerTemplate());

                console.log(template);
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