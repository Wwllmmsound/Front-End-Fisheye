import { PhotographerPage } from '../factories/PhotographerPage.js'

class PhotographerModel {
    constructor(name, portrait, city, country, tagline, price, id) {
        this._name = name
        this._portrait = portrait
        this._tagline = tagline
        this._city = city
        this._country = country
        this._price = price
        this._id = id

        console.log(window.location.href);
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
        return `html/${this._id}.html`
    }
    photographerTemplate(){
        const article = document.createElement("article");
        article.id = "photographers";
        const photographerCard = `
        <a href="./${this._id}.html" alt="Photographer Page" onclick="openDedicatedPage()" id="dedicatedLink">
          <img src="../assets/photographers/profil/${this._portrait}" alt="${this._name} profile image" class="photographer_profileImg">
          <h2>${this._name}</h2>
        </a>
        <p class="photographer_origine">${this._city}, ${this._country}</p>
        <p class="photographer_slogan">${this._tagline}</p>
        <p class="photographer_price">${this._price}€/jours</p>
    `;
        article.innerHTML = photographerCard;
        const link = document.getElementById('dedicatedLink');
        link.addEventListener("click", function(event){
            event.preventDefault()
        });

        return article;
    }

    openDedicatedPage(){

    }


    getPhotographerTemplate (id, medias){

        return medias.filter((media) => {
            return media.photographerId === id;
          });
    
    }
};




export { PhotographerModel };