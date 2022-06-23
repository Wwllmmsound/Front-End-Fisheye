class lightboxModal {
    constructor(id, title, media){
        this.id = id;
        this._title = title;
        this._media = media
    }
    lightboxDisplay() {

        if (this._media.video != undefined) {

            const lightboxBGvid = document.createElement("div");
            const selectedItem = `
            <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
                <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
                <button class="lightbox_next" alt="Flèche Droite"></button>
                <button class="lightbox_prev" alt="Flèche gauche"></button>
                <div class="lightbox_container">
                <video controls>
                    <source src="../assets/photographers/${this._name}/${this.media.video}" 
                    alt="${this.media.title}" aria-label="Video" type="video/mp4" 
                    id=${this.media.imageId} class="lightbox-img">
                </video>
                </div>
            </div>
            `;
            lightboxBG.innerHTML = selectedItem;
            return lightboxBGvid;

        } else if (this._media.image != undefined) {

            const lightboxBGimg = document.createElement("div");
            const selectedItem = `
            <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
                <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
                <button class="lightbox_next" alt="Flèche Droite"></button>
                <button class="lightbox_prev" alt="Flèche gauche"></button>
                <div class="lightbox_container">
                    <img src="../assets/photographers/${this._media.title}/${this._media.image}"
                    alt="${this._media.title}" aria-label="Image agrandie" class="lightbox-img">
                </div>
            </div>
            `;
            lightboxBG.innerHTML = selectedItem;
            return lightboxBGimg;

        } else {
            throw 'Unknown type format'
        };
    };


    displayModal(media) {

        const itemList = this.lightboxDisplay(media);
        const modal = document.querySelector("body");
        modal.appendChild(itemList);
    }
}

export { lightboxModal }