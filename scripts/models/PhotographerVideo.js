import { PhotographerMedia } from "./PhotographerMedia.js";

const videoSection = document.querySelector("video");
class PhotographerVideo {
  constructor(name, element, LikelistSubject) {
    (this.media = element),
      (this._name = name),
      (this._image = this.media.image),
      (this._video = this.media.video),
      (this.LikelistSubject = LikelistSubject);
  }

  PhotographerVideoList() {
    const figure = document.createElement("figure");
    figure.classList.add("video_section");
    // html video
    const photographerPhoto = `
        <a class="item" aria-label="Video de ${this.media.title}, cliquer pour ouvrir la lightbox"
         href="../assets/photographers/${this._name}/${this.media.video}" id=${this.media.imageId}>
        <video autoplay>
            <source src="../assets/photographers/${this._name}/${this.media.video}" 
            alt="${this.media.title}" aria-label="Video" id=${this.media.imageId}>
        </video >
        </a>
            <figcaption class="photo-info" aria-label="Information sur la photo">
            <p class="photo-title" aria-label="Titre de la photo">${this.media.title}</p>
            <div class="like-container like-button">
                <p class="numbOfLike" aria-label="Nombre de likes">${this.media.likes}</p>
                <button id="like-button" class="like-button"><i class="fas fa-heart" aria-hidden="true"></i></button>
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

export { PhotographerVideo };
