import { PhotographerMedia } from './PhotographerMedia.js'

const videoSection = document.querySelector("video");
class PhotographerVideo {


    constructor(name, element) {
        this.media = element
        this._name = name
        this._image = this.media.image
        this._video = this.media.video
        console.log("*********************" + name);
        console.log(element)
    }

    PhotographerVideoList() {
        const figure = document.createElement("figure");
        figure.classList.add('video_section')
            // html video 
        const photographerPhoto = `
        <video controls>
            <source src="../assets/photographers/${this._name}/${this.media.video}" 
            alt="${this.media.title}" aria-label="Video" type="video/mp4">
        </video>
            <figcaption class="photo-info" aria-label="Information sur la photo">
            <p class="photo-title" aria-label="Titre de la photo">${this.media.title}</p>
            <div>
                <p id="numbOfLike" aria-label="Nombre de likes">${this.media.likes}</p>
                <i class="fas fa-heart" aria-hidden="true"></i>
            </div>
        </figcaption>
    `;
        figure.innerHTML = photographerPhoto;
        return figure;
    }

    displayCard(media) {
        const videoList = this.PhotographerVideoList(media);
        const videoSection = document.querySelector(".photos-list");
        videoSection.appendChild(videoList);
    }
}

export { PhotographerVideo }