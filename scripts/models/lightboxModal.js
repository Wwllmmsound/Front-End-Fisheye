class lightboxModal {
    constructor(id, name, media){
        this.id = id
        this._name = name
        this._media = media
    }
    lightboxDisplay() {
        const lightboxBG = document.createElement("div");

        console.log(this._media);
        const selectedItem = `
        <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
            <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
            <button class="lightbox_next" alt="Flèche Droite"></button>
            <button class="lightbox_prev" alt="Flèche gauche"></button>
            <div class="lightbox_container">
                <img src="../assets/photographers/${this._name}/${this._media.image}"
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