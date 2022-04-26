function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

function photographerTemplate(){
    return  `
    <a href="./${this.name}.html" alt="Photographer Page">
      <img src="${this.portrait}" alt="${this.name} profile image" class="photographer_profileImg">
      <h2>${this.name}</h2>
    </a>
    <p class="photographer_origine">${this.city}, ${this.country}</p>
    <p class="photographer_slogan">${this.tagline}</p>
    <p class="photographer_price">${this.price}€/jours</p>
`
}
