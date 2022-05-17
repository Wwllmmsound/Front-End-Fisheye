import { PhotographerMedia } from './PhotographerMedia.js'

class PhotographerVideo extends PhotographerMedia{
    constructor(photographerId, title, video, likes, date, price, name){
        super(photographerId, title, video, likes, date, price, name)
    }

    PhotographerPhotoList(){
        const figure = document.createElement("figure");

        const photographerPhoto = `
        <video controls>
            <source src="../assets/photographers/${this._name}/${this._video}" 
            alt="${this._title}" aria-label="Video" type="video/mp4">
        </video>
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
        const allVideos = await this.photographersApi.getMedia();
        const listVideos = allVideos.map(media => new PhotographerMedia(
            media.photographerId,
            media.title,
            media.video,
            media.likes,
            media.date,
            media.price
        ))

        for (let media of listVideos) {
            if (media.photographerId == this._id) {
                let name = await this.getPhotographerNameById(media.photographerId);
                this.setName(name);
                this.setVideo(media.video);
                this.setLikes(media.likes);
                // this.setTitle(media.title);
                this.displayPhotosCard(media);
                console.log(name);
            }
        }
    }
}

const videosDisplayed = new PhotographerVideo();
videosDisplayed.init();

export { PhotographerVideo }