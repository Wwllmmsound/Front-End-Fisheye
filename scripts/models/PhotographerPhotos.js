class PhotographerPhotos {
    constructor(id, photographerId, title, image, likes, date, price){
        this._id = id,
        this._photographerId = photographerId,
        this._title = title,
        this._image = image,
        this._likes = likes,
        this._date = date,
        this._price = price
    }

    get id(){
        return this._id
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

        PhotographerPhotoList(){
            const figure = document.createElement("figure");
            const photographerPhoto = `
            <img src="${this._image}" alt="${this._title}" aria-label="Photo">
              <figcaption class="photo-info" aria-label="Information sur la photo">
                <p class="photo-title" aria-label="Titre de la photo">${this._title}</p>
                <div>
                    <p id="numbOfLike" aria-label="Nombre de likes">${this._like}</p>
                    <i class="fas fa-heart"></i>
                </div>
            </figcaption>
        `;
            figure.innerHTML = photographerPhoto;

            return figure;
        }
}

export { PhotographerPhotos };