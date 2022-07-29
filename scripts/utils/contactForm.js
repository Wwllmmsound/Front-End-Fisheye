const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contactForm");
const rejex = /^[a-zA-ZÀ-ÿ./\s*]{2,30}$/i;
const regex = /[A-Z0-9._-]+@[A-Z0-9-]+.[A-Z]{2,4}/gi;

// modal required field
let nameOk = false;
let surnameOk = false;
let emailOk = false;

function displayForm() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const modalBg = document.querySelector(".bground");
    modalBg.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    const modalBg = document.querySelector(".bground");
    modalBg.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

contactForm.addEventListener("submit", function (e){
    e.preventDefault();
    console.log(first.value);
    console.log(last.value);
    console.log(email.value);
    console.log(message.value);

    //_______________________________________EMAIL________________________________________//
    if (email.value === "") {
        document.getElementById("required_email").innerText = "Veuillez informer votre e-mail";
      } else if (!email.value.match(regex)){
        document.getElementById("required_email").innerText = "Adresse e-mail incorrect";
        email.style.border = "solid 1px red";
      } else {
        document.getElementById("required_email").innerText = "";
        email.style.border = "none";
        emailOk = true;
      }
    //_____________________________________LAST_NAME_____________________________________//
    if(last.value === "") {
      document.getElementById("required_last").innerText = "Veuillez compléter le champ du prénom";
    } else if (!last.value.match(rejex)){
      document.getElementById("required_last").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      last.style.border = "solid 1px red";
    } else {
      document.getElementById("required_last").innerText = "";
      last.style.border = "none";
      surnameOk = true;
    }
    //_____________________________________FIRST_NAME____________________________________//
    if(first.value === "") {
      document.getElementById("required_first").innerText = "Veuillez compléter le champ du nom";
    } else if (!first.value.match(rejex)){
        document.getElementById("required_first").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
        first.style.border = "solid 1px red";
      } else {
        document.getElementById("required_first").innerText = "";
        first.style.border = "none";
        nameOk = true;
      }
      if (
        nameOk === true &&
        surnameOk === true &&
        emailOk === true
      ) {
        closeModal();
      }        
});


