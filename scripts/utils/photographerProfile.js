class PhotographerProfile {
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographProfile(photographer){
        const photographers = document.getElementById("photographers");

        const photographerCard = `
        <a href="./${this._photographer.name}.html" alt="Photographer Page">
          <img src="${this._photographer.portrait}" alt="${this._photographer.name} profile image" class="photographer_profileImg">
          <h2 class="${this._photographer.name}">Name</h2>
        </a>
        <p class="photographer_origine">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="photographer_slogan">${this._photographer.tagline}</p>
        <p class="photographer_price">${this._photographer.price}€/jours</p>
        `;

        photographers.innerHTML = photographerCard;

        return photographers
    }
}