import { PhotographerApi } from '../api/Api.js'
import { PhotographerModel } from './PhotographerModel.js'

class PhotographerPhotos {
    constructor(photographerId, title, image, video, likes, date, price, name){
        this._id = (new URL(document.location)).searchParams.get("id"),
        this._photographerId = photographerId,
        this._title = title,
        this._image = image,
        this._video = video,
        this._likes = likes,
        this._date = date,
        this._price = price,
        this._name = name,
        this.photosApi = new PhotographerApi('../data/photographers.json'),
        this.photographersApi = new PhotographerApi('../data/photographers.json')
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
    setImage(image){
        this._image = image
    }
    setName(name){
        this._name = name
    }
    get image(){
        console.log(this._name);
        return `../assets/photographers/${this._name}/${this._image}`
    }
    get video(){
        return `../assets/photographers/${this._name}/${this._video}`
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

    async displayPhotosCard(media){
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
        console.log(this._image);
        console.log(this._name);
        return figure;
    }


    async getPhotographerNameById(id){

        let name = "";

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

        for (let photographer of listPhotographers) {
            if (photographer.id == id) {
                name = photographer.name;
            }
        }

        return name;
}

    async init(){
        const allPhotos = await this.photosApi.getMedia();
        const listPhotos = allPhotos.map(media => new PhotographerPhotos(
            media.photographerId,
            media.title,
            media.image,
            media.video,
            media.likes,
            media.date,
            media.price
    ))

        for (let media of listPhotos) {
            if (media.photographerId == this._id) {
                let name = await this.getPhotographerNameById(media.photographerId);
                this.setName(name);
                this.setImage(media.image);
                media.name = this._name;
                this.displayPhotosCard(media);
                console.log(name);
            }
        }
    }


    
}


const photosDisplayed = new PhotographerPhotos();
photosDisplayed.init();

export { PhotographerPhotos };