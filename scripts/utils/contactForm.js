function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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