class lightboxModal {
    constructor(id, title, image){
        this.id = id
        this._title = title
        this._image = image
    }

    lightboxDisplay() {
        const lightboxBG = document.createElement("div");

        for(let id of listPhotos){
            if(media.photographerId == this._id){
                this._image
        	}
        }
        const selectedItem = `
        <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
            <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
            <button class="lightbox_next" alt="Flèche Droite"></button>
            <button class="lightbox_prev" alt="Flèche gauche"></button>
            <div class="lightbox_container">
                <img src="${this._image}" 
                alt="${this._title}" aria-label="Image agrandie" class="lightbox-img">
            </div>
        </div>
        `;
        lightboxBG.innerHTML = selectedItem;
        return lightboxBG;
    }

    displayModal(media) {

        const itemList = this.lightboxDisplay(media);
        const modal = document.querySelector("body");
        modal.appendChild(itemList);
    }
}

export { lightboxModal }