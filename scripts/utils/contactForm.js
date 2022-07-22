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

function sendMessage(){
    const submit = document.getElementById("sendModal");
    const first = document.getElementById("first");
    const last = document.getElementById("last");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(first.innerText);
        console.log(last.innerText);
        console.log(email.innerText);
        console.log(message.innerText);
        closeModal();
    })
}