import { PhotographerMedia } from './PhotographerMedia.js'

class PhotographerImage extends PhotographerMedia{
    constructor(photographerId, title, image, likes, date, price, name){
        super(photographerId, title, image, likes, date, price, name)
    }

    PhotographerPhotoList(){
        const figure = document.createElement("figure");

        const photographerPhoto = `
        <img src="../assets/photographers/${this._name}/${this._image}" alt="${this._title}" aria-label="Photo">
            <figcaption class="photo-info" aria-label="Information sur la photo">
            <p class="photo-title" aria-label="Titre de la photo">${this._title}</p>
            <div>
                <p id="numbOfLike" aria-label="Nombre de likes">${this._likes}</p>
                <i class="fas fa-heart" aria-hidden="true"></i>
            </div>
        </figcaption>
    `;
        figure.innerHTML = photographerPhoto;
        return figure;
    }

    async init(){
        const allPhotos = await this.photographersApi.getMedia();
        const listPhotos = allPhotos.map(media => new PhotographerMedia(
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
                this.setLikes(media.likes);
                // this.setTitle(media.title);
                this.displayPhotosCard(media);
                console.log(name);
            }
        }
    }
}

const photosDisplayed = new PhotographerImage();
photosDisplayed.init();

export { PhotographerImage }