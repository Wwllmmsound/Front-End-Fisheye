import { PhotographerModel } from './PhotographerModel.js'
import { PhotographerApi } from '../api/Api.js'

class PhotographerPage extends PhotographerModel {


    constructor() {
        super(name),
        this.photographersApi = new PhotographerApi('../data/photographers.json'),
        this._id = (new URL(document.location)).searchParams.get("id");
    }

    async displayPhotographerPage(photographer,likes) {
        const photographerHeader = this.photographerHeader(photographer);
        const photographerProfilePic = this.photographerProfilePic(photographer);
        const photographerPrice = this.photographerHourlyPrice(photographer,likes);

        const photographerSection = document.querySelector("#photographerHeader");
        const photographerImg = document.querySelector("#photographerProfilPic");
        const pricePerHour = document.querySelector("#hourlyPrice");

        photographerSection.appendChild(photographerHeader);
        photographerImg.appendChild(photographerProfilePic);
        pricePerHour.appendChild(photographerPrice);
    };

    photographerHeader(photographer) {
        const header = document.createElement("div");
        header.classList.add('profile_info');
        const photographerHeader = `
            <h1 class="profile_name"
            aria-label="Nom du photographe">${photographer.name}</h1>
            <h2 class="profile_origine"
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

     getDatasByPhotographId(id, medias) {
        return medias.filter((media) => {
          return media.photographerId === +id;
        });
      }

    photographerHourlyPrice(photographer,totalLikes){
        const priceDiv = document.createElement("div");
        const price = `
        <div class="total-like">
            <p id="totalOfLike" aria-label="Nombre total de likes" class="totalOfLike">${totalLikes}</p>
            <i class="fas fa-heart" aria-hidden="true"></i>
        </div>
        <p><span id="dailyPrice" aria-label="Prix par heure"></span>€${photographer.price}/jour</p>
        `
        priceDiv.innerHTML = price;
        priceDiv.classList.add("hourly-price");
        return priceDiv
    }


    async init() {
        const photographersHead = await this.photographersApi.getPhotographer();
        const photographersMedia = await this.photographersApi.getMedia();
        const allDatas = await this.getDatasByPhotographId(this._id, photographersMedia);

        var totalLikes = 0;
        for (let media of allDatas) {
            if (media.photographerId == this._id) {
                var likes = media.likes;
                totalLikes += likes;
            }
        }

        const listPhotographers = photographersHead.map(photographer => new PhotographerModel(
            photographer.name,
            photographer.portrait,
            photographer.city,
            photographer.country,
            photographer.tagline,
            photographer.price,
            photographer.id
        ))

        for (let photographer of listPhotographers) {
            if (photographer.id == this._id) {
                console.log("id from photographer page" + this._id)

                this.displayPhotographerPage(photographer,totalLikes);
            }
        }
    };
}

const photographerPage = new PhotographerPage();
photographerPage.init();

export { PhotographerPage };