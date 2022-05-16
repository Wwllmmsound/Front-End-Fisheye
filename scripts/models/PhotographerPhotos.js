import { PhotographerApi } from '../api/Api.js'

class PhotographerPhotos {
    constructor(photographerId, title, image, likes, date, price){
        this._id = (new URL(document.location)).searchParams.get("id"),
        this._photographerId = photographerId,
        this._title = title,
        this._image = image,
        this._likes = likes,
        this._date = date,
        this._price = price,

        this.photosApi = new PhotographerApi('../data/photographers.json')
    }
    get id(){
        return this._id
    }
    setId(id) {
        this._id = id;
    }
    get photographerId(){
        return this._photographerId
    }
    get title(){
        return this._title
    }
    get image(){
        return `assets/photographers/${this._photographerId}/${this._image}`
    }
    get likes(){
        return this._likes
    }
    get date(){
        return this._date
    }
    get price(){
        return this._price
    }

    // ________________________FUNCTION CREATING THE PHOTOS GRID______________________

    async displayPhotos(media){
        const photosList = this.PhotographerPhotoList(media);
        const photosSection = document.querySelector("#photosList");

        photosSection.appendChild(photosList);
    }

    PhotographerPhotoList(){
        const figure = document.createElement("figure");

        const photographerPhoto = `
        <img src="${this._image}" alt="${this._title}" aria-label="Photo">
            <figcaption class="photo-info" aria-label="Information sur la photo">
            <p class="photo-title" aria-label="Titre de la photo">${this._title}</p>
            <div>
                <p id="numbOfLike" aria-label="Nombre de likes">${this._like}</p>
                <i class="fas fa-heart" aria-hidden="true"></i>
            </div>
        </figcaption>
    `;
        figure.innerHTML = photographerPhoto;

        return figure;
    }

    async init(){
        const allPhotos = await this.photosApi.getMedia();
        const listPhotos = allPhotos.map.map(media => {
            media.photographerId,
            media.title,
            media.image,
            media.likes,
            media.date,
            media.price
    })

        for (let media of listPhotos) {
            if (media.photographerId == this._id) {
                this.displayPhotos(media);
                console.log(this._photographerId)
            }
        }
    }
}

const photosDisplayed = new PhotographerPhotos();
photosDisplayed.init();

export { PhotographerPhotos };