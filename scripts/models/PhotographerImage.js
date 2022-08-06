class PhotographerImage {
  constructor(name, element, LikelistSubject) {
    this.media = element;
    this._name = name;
    this._image = this.media.image;
    this.LikelistSubject = LikelistSubject;
  }

  PhotographerPhotoList() {
    const figure = document.createElement("figure");

    const photographerPhoto = `
      <a class="item" aria-label="Image de ${this.media.title}, cliquer pour ouvrir la lightbox"
         href="../assets/photographers/${this._name}/${this.media.image}" id=${this.media.imageId}>
        <img src="../assets/photographers/${this._name}/${this._image}"
        alt="${this.media.title}" aria-label="Photo" id=${this.media.imageId}>
      </a>
            <figcaption class="photo-info" aria-label="Information sur la photo">
            <p class="photo-title" aria-label="Titre de la photo">${this.media.title}</p>
            <div class="like-container">
                <p class="numbOfLike" aria-label="Nombre de likes">${this.media.likes}</p>
                <button id="like-button" class="like-button"><i class="fas fa-heart" aria-hidden="true"></i></button>
            </div>
        </figcaption>
    `;
    figure.innerHTML = photographerPhoto;
    return figure;
  }

  displayCard(media) {
    const photosList = this.PhotographerPhotoList(media);
    const photosSection = document.querySelector("#photosList");

    photosSection.appendChild(photosList);
  }
}

export { PhotographerImage };
