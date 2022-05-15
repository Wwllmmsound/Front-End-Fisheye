function displayModal() {
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
