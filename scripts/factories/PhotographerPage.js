import { PhotographerFactory } from './PhotographerFactory.js'

class PhotographerPage extends PhotographerFactory{
    constructor(name, portrait, city, country, tagline, price, id){
        super(name, portrait, city, country, tagline, price, id)
    }

    photographerHeader(){
        const header = document.createElement("div");
        header.classList.add('profile_info');
        const photographerHeader = `
            <h1 class="profile_name">${this.name}</h1>
            <h3 class="profile_origine">${this.city}, ${this.country}</h3>
            <p class="profile_slogan">${this.tagline}</p>
        `;
        header.innerHTML = photographerHeader;
        return header
    }

    photographerProfilePic(){
        const profilPic = document.getElementById("photographerProfilPic");
        const image = `
        <img src="../assets/photographers/profil/${this.portrait}" alt="photographer profile image" class="photographerProfilPic">
        `
        profilPic.innerHTML = image;
        return profilPic
    }
}

export { PhotographerPage };