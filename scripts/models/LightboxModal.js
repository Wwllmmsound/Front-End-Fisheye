import { MediaFactory } from "../factory/MediaFactory.js";

const lightboxhtmlmodal = document.querySelector(".lightbox_bground");

class LightboxModal {
  constructor(media, name) {
    this.currentMedia = [];
    this._name = name;
    this._media = media;
  }

  setCurrentMedia(media) {
    this.currentMedia = media;
  }
  getCurrentMedia() {
    return this.currentMedia;
  }
  lightboxDisplay() {
    const lightboxBG = document.createElement("div");
    lightboxBG.classList.add("lightbox_modal");
    const selectedItem = `
            <button class="lightbox_close" id="lightBoxClose" aria-label="Bouton de fermeture"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
            <button class="lightbox_next" id="lightBoxNext" alt="Flèche Droite" aria-label="Bouton image suivants"></button>
            <button class="lightbox_prev" id="lightBoxPrev" alt="Flèche gauche" aria-label="Bouton image précédente"></button>
        `;
    lightboxBG.innerHTML = selectedItem;
    console.log(lightboxBG);
    return lightboxBG;
  }

  // trouver un média par son id
  getMediaById(idMedia, medias) {
    console.log(medias);
    console.log(idMedia);
    return medias.find((element) => element.imageId == idMedia);
  }

  // Gestion de la navigation lightbox
  next() {
    console.log("_media", this._media);
    console.log("this.currentMedia.imageId", this.currentMedia);

    let nextIndex = this._media.findIndex(
      (element) => element.imageId == this.currentMedia.imageId
    );
    if (nextIndex === this._media.length - 1) {
      this.currentMedia = this._media[0];
      this.setCurrentMedia(this._media[0]);
    } else {
      this.currentMedia = this._media[nextIndex + 1];
      this.setCurrentMedia(this._media[nextIndex + 1]);
      console.log(this.currentMedia);
    }
    this.secondDisplay();
  }

  previous() {
    let prevIndex = this._media.findIndex(
      (element) => element.imageId == this.currentMedia.imageId
    );

    console.log(prevIndex == this._media.length + 1);
    if (prevIndex === 0) {
      this.currentMedia = this._media[this._media.length - 1];
      this.setCurrentMedia(this._media[this._media.length - 1]);
    } else {
      this.currentMedia = this._media[prevIndex - 1];
      this.setCurrentMedia(this._media[prevIndex - 1]);
      console.log(this.currentMedia);
    }
    this.secondDisplay();
  }

  close() {
    // Reset le media ID
    console.log("clode modale");
    document
      .querySelector("div.lightbox_bground")
      .removeChild(document.querySelector(".lightbox_modal"));
    console.log(this.currentMedia.imageId);
    lightboxhtmlmodal.setAttribute("aria-hidden", "true");
    lightboxhtmlmodal.style.display = "none";
  }

  async eventManager() {
    document.querySelector("#lightBoxNext").addEventListener("click", () => {
      this.next();
      console.log("next");
    });
    document.querySelector("#lightBoxPrev").addEventListener("click", () => {
      this.previous();
    });
    document.querySelector("#lightBoxClose").addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.next();
          break;
        case "ArrowLeft":
          this.previous();
          break;
        case "Escape":
          this.close();
          break;
      }
    });
  }

  async displayModal(idMedia, medias, name) {
    this.currentMedia = this.getMediaById(idMedia, medias);
    console.log(this.currentMedia);
    console.log(idMedia);

    const display = new MediaFactory(this.currentMedia, name);
    const div = document.createElement("div");
    div.classList.add("lightbox_container");
    const ligthBoxContainer = this.lightboxDisplay();

    if (this.currentMedia.video == undefined) {
      const image = `
      <img src="../assets/photographers/${name}/${this.currentMedia.image}"
      alt="${this.currentMedia.title}" aria-label="Photo de ${this.currentMedia.title}, cliquer pour ouvrir la lightbox" 
      id=${this.currentMedia.imageId} class="item">`;

      let img = document.createElement("div");
      img.classList.add("lightbox-img");
      img.innerHTML = image;

      div.appendChild(img);
      ligthBoxContainer.appendChild(div);
    } else {
      console.log("create video");
      const video = `<div class="item" aria-label="Video de ${this.currentMedia.title}, cliquer pour ouvrir la lightbox"
      id=${this.currentMedia.imageId}>
     <video autoplay class="video-lightbox">
         <source src="../assets/photographers/${this._name}/${this.currentMedia.video}" 
         alt="${this.currentMedia.title}" aria-label="Video" id=${this.currentMedia.imageId}>
     </video>
     </div>`;
      const mp4 = document.createElement("div");
      mp4.classList.add("lightbox-img");
      mp4.innerHTML = video;
      div.appendChild(mp4);
      ligthBoxContainer.appendChild(div);
    }
    console.log(ligthBoxContainer);
    console.log(lightboxhtmlmodal);
    lightboxhtmlmodal.appendChild(ligthBoxContainer);
    // lightboxhtmlmodal.classList.add("active");
    lightboxhtmlmodal.setAttribute("aria-hidden", "false");
    lightboxhtmlmodal.style.display = "block";
    this.eventManager();
  }

  async secondDisplay() {
    // this.currentMedia = this.getMediaById();
    const modal = document.querySelector(".lightbox_modal");
    modal.removeChild(document.querySelector(".lightbox_container"));
    const div = document.createElement("div");
    div.classList.add("lightbox_container");
    console.log(this.currentMedia);
    if (this.currentMedia.video === undefined) {
      const image = `<img src="../assets/photographers/${this._name}/${this.currentMedia.image}"
        alt="${this.currentMedia.title}" aria-label="Photo de ${this.currentMedia.title}, cliquer pour ouvrir la lightbox"
        id=${this.currentMedia.imageId} class="item">`;
      let img = document.createElement("div");
      img.classList.add("lightbox-img");
      img.innerHTML = image;
      div.appendChild(img);
      modal.appendChild(div);
    } else {
      const video = `<div class="item" aria-label="Video de ${this.currentMedia.title}, cliquer pour ouvrir la lightbox"
      id=${this.currentMedia.imageId}>
     <video autoplay class="video-lightbox">
         <source src="../assets/photographers/${this._name}/${this.currentMedia.video}" 
         alt="${this.currentMedia.title}" aria-label="Video" id=${this.currentMedia.imageId}>
     </video>
     </div>`;
      console.log(this.currentMedia.video);

      console.log(this.currentMedia.title);

      console.log(this.currentMedia.imageId);

      console.log(video);
      const mp4 = document.createElement("div");
      mp4.classList.add("lightbox-img");
      mp4.innerHTML = video;
      div.appendChild(mp4);
      modal.appendChild(div);
    }
    this.eventManager();
  }
}

export { LightboxModal };
