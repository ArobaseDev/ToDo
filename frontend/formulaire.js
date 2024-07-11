function formulaire() {

    const paragraphe = document.getElementById('paragraphe');
    const form = document.getElementById('form');

    // Récupération des données du formulaire
    const lastname = document.getElementById('nom').value;
    const firstname = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    form.addEventListener('click', () => {
        // Vérification des données
        if (lastname.trim() === '' || firstname.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Veuillez remplir tous les champs');
            return false;
        }

        // Validation de l'email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('Veuillez entrer une adresse email valide');
            return false;
        }
        
        // Validation du mot de passe
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexPassword.test(password)) {
            alert('Veuillez entrer un mot de passe correct (minimum 8 caractères, au moins une majuscule, une minuscule, un chiffre et un caractère spécial)');
            return false;
        }

        // Affichage du message de confirmation
        paragraphe.textContent = `Merci ${firstname} ${lastname} pour votre inscription.`;
        paragraphe.style.display = 'block';
        form.style.display = 'none';
        return false;

        // Reset du formulaire
        form.reset();
        return false;
    })
}