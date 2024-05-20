document.getElementById("nom").addEventListener("input", function (e) {
  let nomformat = /^[a-zA-Z-\s]+$/;

  if (nomformat.test(nom.value) == false) {
    let Erreurname = document.getElementById("erreurnom");

    Erreurname.innerHTML = "Le nom doit comporter uniquement des lettres";
    Erreurname.style.color = "red";
    e.preventDefault();
  } else {
    let Erreurname = document.getElementById("erreurnom");

    Erreurname.innerHTML = "Champ valide !";
    Erreurname.style.color = "green";
  }
});

document.getElementById("email").addEventListener("input", function (e) {
  let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;

  if (mailformat.test(email.value) == false) {
    let Erreurmail = document.querySelector("#erreuremail");

    Erreurmail.innerHTML = "Format email invalide !";
    Erreurmail.style.color = "red";
    e.preventDefault();
  } else {
    let Erreurmail = document.querySelector("#erreuremail");
    Erreurmail.innerHTML = "email valide !";
    Erreurmail.style.color = "green";
  }
});

let Form = document.getElementById("form");

Form.addEventListener("submit", (e) => {
  let inputNom = document.getElementById("nom");
  let inputEmail = document.getElementById("email");
  let MessageText = document.getElementById("message");

  //controle saisie champ obligatoire nom//
  if (inputNom.value.trim() == "") {
    let Erreurname = document.getElementById("erreurnom");
    Erreurname.innerHTML = "Le nom est obligatoire !";
    Erreurname.style.color = "red";
    e.preventDefault();
  }
  if (inputEmail.value.trim() == "") {
    let Erreurmail = document.getElementById("erreuremail");
    Erreurmail.innerHTML = "Votre Email est obligatoire !";
    Erreurmail.style.color = "red";
    e.preventDefault();
  }
  //controle saisie champ message//
  if (MessageText.value.trim() == "") {
    let Erreurtel = document.getElementById("erreurmessage");
    Erreurtel.innerHTML = "Merci d'écrire votre message!";
    Erreurtel.style.color = "red";
    e.preventDefault();
  }
});
