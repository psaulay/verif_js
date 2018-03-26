var formValid = document.getElementById("bouton_envoyer");
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var nom = document.getElementById('nom');
var missNom = document.getElementById('missNom');
var message = document.getElementById('message');
var missMessage = document.getElementById('missMessage');
var selectsex = document.formulaire.sexe.value;
var missSelectsex = document.formulaire.sexe.value;


formValid.addEventListener('click', validation);

function validation(event) {
    //Si le champ prénom est vide
    if (prenom.value.length === 0){
        event.preventDefault();
        missPrenom.textContent = 'Prénom manquant';
        missPrenom.style.color = 'red';
        prenom.style.borderColor= 'red';

    }

    //Si le champ nom est vide
    if (nom.value.length === 0){
        event.preventDefault();
        missNom.textContent = 'Nom manquant';
        missNom.style.color = 'red';
        nom.style.borderColor= 'red';
    }

    //Si le champ mail est vide
    if (mail.value.length === 0){
        event.preventDefault();
        missMail.textContent = 'Adresse mail manquante';
        missMail.style.color = 'red';
        mail.style.borderColor= 'red';
    }
    //Si le champ message est vide
    if (message.value.length === 0){
        event.preventDefault();
        missMessage.textContent = 'Message manquant';
        missMessage.style.color = 'red';
        message.style.borderColor= 'red';
    }
    if (sexe1.checked === false && sexe2.checked === false) {
        event.preventDefault();
        missSelectSexe.textContent = 'Genre manquant';
        missSelectSexe.style.color = 'red';
        sexe.style.borderColor= 'red';
    }
    
}
