class PhotographerImage {

    constructor(name, element, LikelistSubject) {
        this.media = element
        this._name = name
        this._image = this.media.image
        this.LikelistSubject = LikelistSubject
    }

    PhotographerPhotoList() {
        const figure = document.createElement("figure");

        const photographerPhoto = `
        <img src="../assets/photographers/${this._name}/${this._image}"
        alt="${this.media.title}" aria-label="Photo">
            <figcaption class="photo-info" aria-label="Information sur la photo">
            <p class="photo-title" aria-label="Titre de la photo">${this.media.title}</p>
            <div>
                <p id="numbOfLike" aria-label="Nombre de likes">${this.media.likes}</p>
                <button class="like-button"><i class="fas fa-heart" aria-hidden="true"></i></button>
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

    handleLikeButton(){
        const that = this

        this._count.querySelector('.like-button')
                    .addEventListener('click', function(){
                        if(){
                            
                        }
                    })
    }
}



export { PhotographerImage }