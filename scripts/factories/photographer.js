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

function photographerTemplate(value){
    return  `
    <a href="./${value.name}.html" alt="Photographer Page">
      <img src="${value.portrait}" alt="${value.name} profile image" class="photographer_profileImg">
      <h2 class="${value.name}">Name</h2>
    </a>
    <p class="photographer_origine">${value.city}, ${value.country}</p>
    <p class="photographer_slogan">${value.tagline}</p>
    <p class="photographer_price">${value.price}€/jours</p>
`
}