async function photographers () {
    fetch("../data/photographers.json")
    .then(function (res){
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value){
        return document.getElementById("photographers").innerHTML = `
            <a href="./${value.name}.html" alt="Photographer Page">
              <img src="${value.portrait}" alt="${value.name} profile image" class="photographer_profileImg">
              <h2 class="${value.name}">Name</h2>
            </a>
            <p class="photographer_origine">${value.city}, ${value.country}</p>
            <p class="photographer_slogan">${value.tagline}</p>
            <p class="photographer_price">${value.price}€/jours</p>
    `
    })
};

photographers();
