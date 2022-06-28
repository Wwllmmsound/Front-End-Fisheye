// class LightboxModal {
//     constructor(name, media){
//         this.currentMedia = {};
//         this._name = name;
//         this._media = media
//     }
//     lightboxDisplay(idMedia, medias, name) {

//         this.currentMedia = this.getMediaById(idMedia,medias);

//         if (this._media.video != undefined) {

//             const lightboxBGvid = document.createElement("div");
//             const selectedItem = `
//             <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
//                 <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
//                 <button class="lightbox_next" alt="Flèche Droite"></button>
//                 <button class="lightbox_prev" alt="Flèche gauche"></button>
//                 <div class="lightbox_container">
//                 <video controls>
//                     <source src="../assets/photographers/${this._name}/${this.currentMedia.video}"
//                     alt="${this.currentMedia.title}" aria-label="Video" type="video/mp4"
//                     id=${this.media.imageId} class="lightbox-img">
//                 </video>
//                 </div>
//             </div>
//             `;
//             lightboxBG.innerHTML = selectedItem;
//             return lightboxBGvid;

//         } else if (this._media.image != undefined) {

//             const lightboxBGimg = document.createElement("div");
//             const selectedItem = `
//             <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
//                 <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
//                 <button class="lightbox_next" alt="Flèche Droite"></button>
//                 <button class="lightbox_prev" alt="Flèche gauche"></button>
//                 <div class="lightbox_container">
//                     <img src="../assets/photographers/${this._name}/${this.currentMedia.image}"
//                     alt="${this.currentMedia.title}" aria-label="Image agrandie"
//                     id=${this.currentMedia.imageId} class="lightbox-img">
//                 </div>
//             </div>
//             `;
//             lightboxBG.innerHTML = selectedItem;
//             return lightboxBGimg;

//         } else {
//             throw 'Unknown type format'
//         };
//     };


//     displayModal(media) {

//         const itemList = this.lightboxDisplay(media);
//         const modal = document.querySelector("body");
//         modal.appendChild(itemList);
//     }
// }

// export { LightboxModal }


// // // //________________________________________
// // // //________________________________________
// // // //________________________________________
// // // //________________________________________
// // // //________________________________________
// // // //________________________________________
// // // //________________________________________
// // // //________________________________________
// // // //________________________________________

import { MediaFactory } from '../factory/MediaFactory.js'

    const lightboxhtmlmodal = document.querySelector(".ltighbox_modal");


class LightboxModal {
    constructor(media, name){
        this.currentMedia = {}
        this._name = name
        this._media = media
    }
    lightboxDisplay() {
        const lightboxBG = document.createElement("div");
        const selectedItem = `
            <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
            <button class="lightbox_next" alt="Flèche Droite"></button>
            <button class="lightbox_prev" alt="Flèche gauche"></button>
        `;
        lightboxBG.classList.add('lightbox_bground');
        lightboxBG.innerHTML = selectedItem;

        return lightboxBG;
    }

    // trouver un média par son id
	getMediaById(idMedia,medias){
        console.log(medias)
	    return medias.find(element => element.imageId == idMedia)
	}

    async displayModal(idMedia, medias, name) {
        this.currentMedia = this.getMediaById(idMedia, medias);
        const image =  `<img src="../assets/photographers/${this._name}/${this.currentMedia.image}"
        alt="${this.currentMedia.title}" aria-label="Photo" id=${this.currentMedia.imageId} class="item">`
        const  video =`<video controls>
        <source src="../assets/photographers/${this._name}/${this.currentMedia.video}" 
        alt="${this.currentMedia.title}" aria-label="Video" type="video/mp4" id=${this.currentMedia.imageId} class="item">
    </video>`;
       const display = new MediaFactory(this.currentMedia, name);
       const div =   document.createElement('div');
       div.classList.add('lightbox_container');
       const ligthBoxContainer = this.lightboxDisplay();

       if (this.currentMedia.video == undefined){
        let img = document.createElement('img');
        img.classList.add('lightbox-section__view__picture');
        img.innerHTML = image;

        div.appendChild(img);
        ligthBoxContainer.appendChild(div);

        } else {
            const mp4 = document.createElement('video');
            mp4.classList.add('lightbox-section__view__picture');
            mp4.innerHTML = video;
            div.appendChild(mp4);
            ligthBoxContainer.appendChild(div);
        }

        const pictures = document.querySelectorAll('.item');
        pictures.forEach(element => {
            element.addEventListener("click", (e) => {
                console.log(lightboxhtmlmodal);
                lightboxhtmlmodal.appendChild(ligthBoxContainer);
                lightboxhtmlmodal.classList.add("active");
                lightboxhtmlmodal.setAttribute("aria-hidden", "false");
                lightboxhtmlmodal.style.display = "block";
            })
        })
    }
    
    

    next(){
        let index = this.currentMedia.findIndex(element => element.id == this.currentMedia.id);
        if(index == this.currentMedia.length - 1) {
            this.XXXXXXX = this.currentMedia[0];
        }
        this.currentMedia = this.currentMedia[index + 1];
        this.displayModal();
    }

    previous(){
        let index = this.currentMedia.findIndex(element => element.id == this.currentMedia.id);
        if(index == 0) {
            this.XXXXXXX = this.currentMedia[this.currentMedia.length - 1];
        }
        this.currentMedia = this.currentMedia[index - 1];
        this.displayModal();
    }

    close(){
        document.querySelector(".lightbox_close").style.display = "none";
    }

    eventManager(){
        document.querySelector(".lightbox_next")
                .addEventListener("click", () => {this.next()});
        document.querySelector(".lightbox_prev")
                .addEventListener("click", () => {this.previous()});
        document.querySelector(".lightbox_close")
                .addEventListener("click", () => {this.close()});
    }
}

export { LightboxModal }