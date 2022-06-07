class Lightbox {
     constructor(url) {
        this.element = this.displayLightbox(url);
        document.body.appendChild(this.element);
    }

    init(){
        document.querySelectorAll('figure[src=".jpg"], figure[src=".mp4"]')
            .forEach(link => link.addEventListener('click', e => {
                new Lightbox (e.currentTarget.getAttribute('src'))
            }))
    }

    displayLightbox(url){
        const lightbox = document.createElement('div');
        lightbox.classList.add('Lightbox_bground');
        lightbox.innerHTML = `
        <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
            <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
            <button class="lightbox_next" alt="Flèche Droite"></button>
            <button class="lightbox_prev" alt="Flèche gauche"></button>
            <div class="lightbox_container">
                <img src="${url}" 
                alt="" aria-label="Image agrandie" class="lightbox-img">
            </div>
        </div>
        `
        return lightbox
    }
}

export { Lightbox }