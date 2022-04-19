class PhotographerList {
    constructor(profile) {
        this._name = profile.name
        this._city = profile.city
        this._country = profile.country
        this._tagline = profile.tagline
        this._price = profile.price
        this._portrait = profile.portrait
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
        return this._portrait
    }

    photographerTemplate(){
        return  `
        <a href="./${this._name}.html" alt="Photographer Page">
          <img src="${this._portrait}" alt="${this._name} profile image" class="photographer_profileImg">
          <h2>${this._name}</h2>
        </a>
        <p class="photographer_origine">${this._city}, ${this._country}</p>
        <p class="photographer_slogan">${this._tagline}</p>
        <p class="photographer_price">${this._price}€/jours</p>
    `
    }
}

export { PhotographerList };