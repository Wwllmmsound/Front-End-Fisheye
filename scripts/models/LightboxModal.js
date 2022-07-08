import { MediaFactory } from "../factory/MediaFactory.js";

const lightboxhtmlmodal = document.querySelector(".lightbox_bground");

class LightboxModal {
  constructor(media, name) {
    this.currentMedia = {};
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
    const selectedItem = `
            <button class="lightbox_close" id="lightBoxClose"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
            <button class="lightbox_next" id="lightBoxNext" alt="Flèche Droite"></button>
            <button class="lightbox_prev" id="lightBoxPrev" alt="Flèche gauche"></button>
        `;
    lightboxBG.classList.add("lightbox_modal");
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

    console.log(nextIndex == this._media.length + 1);
    if (nextIndex === this._media.length - 1) {
      console.log("we are here******");
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
      console.log("we are here******");
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
    this._media = null;
    console.log(this._media);
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
  }

  async displayModal(idMedia, medias, name) {
    console.log(name);
    this.currentMedia = this.getMediaById(idMedia, medias);
    console.log(this.currentMedia);
    const image = `<img src="../assets/photographers/${name}/${this.currentMedia.image}"
        alt="${this.currentMedia.title}" aria-label="Photo" id=${this.currentMedia.imageId} class="item">`;
    const video = `<video controls>
        <source src="../assets/photographers/${name}/${this.currentMedia.video}" 
        alt="${this.currentMedia.title}" aria-label="Video" type="video/mp4" id=${this.currentMedia.imageId} class="item">
    </video>`;
    const display = new MediaFactory(this.currentMedia, name);
    const div = document.createElement("div");
    div.classList.add("lightbox_container");
    const ligthBoxContainer = this.lightboxDisplay();

    if (this.currentMedia.video == undefined) {
      let img = document.createElement("div");
      img.classList.add("lightbox-img");
      img.innerHTML = image;

      div.appendChild(img);
      ligthBoxContainer.appendChild(div);
    } else {
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

  secondDisplay() {
    // this.currentMedia = this.getMediaById();
    const modal = document.querySelector(".lightbox_modal");
    console.log(modal);
    modal.removeChild(document.querySelector(".lightbox_container"));
    const div = document.createElement("div");
    div.classList.add("lightbox_container");
    console.log(this.currentMedia);
    if (this.currentMedia.video === undefined) {
        const image = `<img src="../assets/photographers/${this._name}/${this.currentMedia.image}"
        alt="${this.currentMedia.title}" aria-label="Photo" id=${this.currentMedia.imageId} class="item">`;
      let img = document.createElement("div");
      img.classList.add("lightbox-img");
      img.innerHTML = image;
      div.appendChild(img);
      modal.appendChild(div);
    } else {
        const video = `<video controls>
        <source src="../assets/photographers/${this._name}/${this.currentMedia.video}" 
        alt="${this.currentMedia.title}" aria-label="Video" type="video/mp4" id=${this.currentMedia.imageId} class="item">
        </video>`;
      const mp4 = document.createElement("div");
      mp4.classList.add("lightbox-img");
      mp4.innerHTML = video;
      div.appendChild(mp4);
      modal.appendChild(div);
    }
    console.log(lightboxhtmlmodal);
  }
}

export { LightboxModal };
