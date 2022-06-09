class Lightbox {
    
    static init() {
        const lightboxUrl = document.querySelectorAll('figure[src=".jpg"], figure[src=".mp4"]')
         .forEach(figure => figure.addEventListener('click', e => {
            new Lightbox (e.currentTarget.getAttribute('src'));
        }))
    };

    constructor(url){
        this.element = displayLightbox(url);
        document.body.appendChild(this.element);
    };

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
                alt="${url}" aria-label="Image agrandie" class="lightbox-img">
            </div>
        </div>
        `
    }
}

const lightboxDisplay = new Lightbox ();


export { Lightbox }

// constructor(url) {
//     this.element = this.displayLightbox(url);
//     document.body.appendChild(this.element);
// }

// displayLightbox(url){
//     const lightboxUrl = document.querySelectorAll('figure[src=".jpg"], figure[src=".mp4"]')
//         .forEach(figure => figure.addEventListener('click', e => {
//             new Lightbox (e.currentTarget.getAttribute('src'));
//             const lightbox = document.createElement('div');
//             lightbox.classList.add('Lightbox_bground');
//             lightbox.innerHTML = `
//             <div id="lightboxModal" class="lightbox_modal" aria-hidden="true">
//                 <button class="lightbox_close"><img src="../assets/icons/close.svg" alt="Fermer Modale"></button>
//                 <button class="lightbox_next" alt="Flèche Droite"></button>
//                 <button class="lightbox_prev" alt="Flèche gauche"></button>
//                 <div class="lightbox_container">
//                     <img src="${url}" 
//                     alt="${url}" aria-label="Image agrandie" class="lightbox-img">
//                 </div>
//             </div>
//             `
//         }))

//     console.log(lightboxUrl);

//     return lightbox
// }