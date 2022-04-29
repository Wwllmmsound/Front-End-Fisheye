class PhotographerModel {
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

// ________________________FUNCTION OPENING THE DEDICATED WEBPAGE______________________

    photographerTemplate(){
        const article = document.createElement("article");
        const photographerCard = `
        <a href="./photographer-page.html?id=${this._id}" alt="Photographer Page" id="dedicatedLink">
          <img src="../assets/photographers/profil/${this._portrait}" alt="${this._name} profile image" class="photographer_profileImg">
          <h2>${this._name}</h2>
        </a>
        <p class="photographer_origine">${this._city}, ${this._country}</p>
        <p class="photographer_slogan">${this._tagline}</p>
        <p class="photographer_price">${this._price}€/jours</p>
    `;
        article.innerHTML = photographerCard;
        article.id = this._id;


        // if (article.id === this._id){
        //     this._name,
        //     this._portrait,
        //     this._city,
        //     this._country,
        //     this._tagline,
        //     this._price
        // }

        // article.addEventListener('click', (event) => {
        //     event.preventDefault(),
        //     console.log(this._id)
        // });
        
        // onclick="openDedicatedPage()"

        return article;
    }


    getPhotographerTemplate (id, medias){

        return medias.filter((media) => {
            return media.photographerId === id;
          });
    
    }
};




export { PhotographerModel };