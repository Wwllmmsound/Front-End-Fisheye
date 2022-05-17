import { PhotographerModel } from './PhotographerModel.js'
import { PhotographerApi } from '../api/Api.js'
class PhotographerPage extends PhotographerModel {


    constructor() {
        super(name),
        this.photographersApi = new PhotographerApi('../data/photographers.json'),
        this._id = (new URL(document.location)).searchParams.get("id");
        
        console.log(this._id)


    }

    async displayPhotographerPage(photographer) {


        const photographerHeader = this.photographerHeader(photographer);
        const photographerProfilePic = this.photographerProfilePic(photographer);

        const photographerSection = document.querySelector("#photographerHeader");
        const photographerImg = document.querySelector("#photographerProfilPic");

        photographerSection.appendChild(photographerHeader);
        photographerImg.appendChild(photographerProfilePic);
    };

    photographerHeader(photographer) {
        const header = document.createElement("div");
        header.classList.add('profile_info');
        const photographerHeader = `
            <h1 class="profile_name"
            aria-label="Nom du photographe">${photographer.name}</h1>
            <h3 class="profile_origine"
            aria-label="Ville du photographe">${photographer.city}, ${photographer.country}</h3>
            <p class="profile_slogan"
            aria-label="Slogan du photographe">${photographer.tagline}</p>
        `;
        header.innerHTML = photographerHeader;

        return header
    }

    photographerProfilePic(photographer) {
        const profilPic = document.createElement("div");
        const image = `
        <img src="../${photographer.portrait}"
        alt="${photographer.name} profile image"
        class="photographerProfilPic"
        aria-label="Photo de profile du photographe">
        `
        profilPic.innerHTML = image;
        return profilPic
    }


    async init() {
        const photographersHead = await this.photographersApi.getPhotographer();
        const listPhotographers = photographersHead.map(photographer => new PhotographerModel(
            photographer.name,
            photographer.portrait,
            photographer.city,
            photographer.country,
            photographer.tagline,
            photographer.price,
            photographer.id
        ))

        console.log(listPhotographers);
        console.log(photographersHead);
        for (let photographer of listPhotographers) {
            if (photographer.id == this._id) {
                console.log("id from photographer page" + this._id)
                this.displayPhotographerPage(photographer);

            }
        }

        console.log("photographersHead" + photographersHead);
    };
}

const photographerPage = new PhotographerPage();
photographerPage.init();

export { PhotographerPage };