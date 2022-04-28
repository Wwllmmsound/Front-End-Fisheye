import { PhotographerModel } from '../models/PhotographerModel.js'
import { PageApp } from '../app/PageApp.js'

class PhotographerPage {
    constructor(name, portrait, city, country, tagline, price, id) {
        this._name = name,
        this._portrait = portrait,
        this._tagline = tagline,
        this._city = city,
        this._country = country,
        this._price = price,
        this._id = id
    }
    get name(){
        return this._name
    }
    get city(){
        return this._city
    }
    get country(){
        return this._country
    }
    get tagline(){
        return this._tagline
    }
    get price(){
        return this._price
    }
    get portrait(){
        return `assets/photographers/profil/${this._portrait}`
    }
    get id(){
        return this._id
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