import { MediaFactory } from '../factory/MediaFactory.js'

    const lightboxhtmlmodal=document.querySelector(".lightbox_modal");

class lightboxModal {
    constructor( media, name){
        this.currentMedia={}
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
        lightboxBG.classList.add('Lightbox_bground')
        lightboxBG.innerHTML = selectedItem;

        return lightboxBG;
    }

    async displayModal(idMedia,medias, name) {
        const assets = "assets/photographers/";
        this.currentMedia=this.getElementById(idMedia,medias);
        let title= this.currentMedia.title;
        const image =  `<img src="../assets/photographers/${this._name}/${this.currentMedia.image}"
        alt="${this.currentMedia.title}" aria-label="Photo" id=${this.currentMedia.imageId} class="item">`
        const  video =`<video controls>
        <source src="../assets/photographers/${this._name}/${this.currentMedia.video}" 
        alt="${this.currentMedia.title}" aria-label="Video" type="video/mp4" id=${this.currentMedia.imageId} class="item">
    </video>`
       const display = new MediaFactory(  this.currentMedia, name);
       const div =   document.createElement('div')
       div.classList.add('lightbox_container')
       const ligthBoxContainer= this.lightboxDisplay();
      
       if(this.currentMedia.video == undefined){
        let img=document.createElement('img')
        img.classList.add('lightbox-section__view__picture')
        img.innerHTML=image;
     
        div.appendChild(img)
        ligthBoxContainer.appendChild(div);

    }else{
        const mp4= document.createElement('video')
        mp4.classList.add('lightbox-section__view__picture')
        mp4.innerHTML= video;
      
       
        div.appendChild(mp4);
        ligthBoxContainer.appendChild(div)

    }
    // a ajuster
    console.log(lightboxhtmlmodal)
    lightboxhtmlmodal.appendChild(ligthBoxContainer)
    lightboxhtmlmodal.classList.add("active");
    lightboxhtmlmodal.setAttribute("aria-hidden", "false");
    lightboxhtmlmodal.style.display = "block";
   
    }

    // trouver un média par son id
	getElementById(idMedia,medias){
        console.log(medias)
		return medias.find(element =>element.imageId == idMedia)
	}
	
}

export { lightboxModal }